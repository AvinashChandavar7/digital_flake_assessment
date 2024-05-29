import mongoose, { Schema, models, model, Document } from "mongoose";
import bcrypt from 'bcryptjs';
import jwt, { SignOptions } from "jsonwebtoken";


enum AllowedRoles {
  Admin = "admin",
  SuperAdmin = "superadmin",
  Caller = "caller",
  Account = "account",
}

export interface IUser extends Document {
  name?: string;
  mobile?: string;
  email: string;
  password: string;
  // roles?: mongoose.Types.ObjectId[];
  roleName: AllowedRoles;
  status: boolean;
  photo?: string;
}

const userSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: [false, "A user must have a name"],
      lowercase: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: [false, "Please provide a valid moblie."],
      index: true,
    },
    email: {
      type: String,
      required: [true, "Please provide a valid email."],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: [true, "Please provide passwords."],
      minlength: 8,
    },
    roleName: {
      type: String,
      required: [false, "A role must have a name"],
      enum: Object.values(AllowedRoles),
      default: AllowedRoles.Admin,
    },
    status: {
      type: Boolean,
      required: [false, "Please specify the status"],
      default: true,
    },
    photo: {
      type: String,
      default: 'default.jpg',
    },
    // roles: [{ type: Schema.Types.ObjectId, ref: 'Role', }],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password: string) {
  return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateRefreshToken = function () {
  const payload = { userId: this._id };
  const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET as string;
  const refreshTokenExpiry = process.env.REFRESH_TOKEN_EXPIRY as string;

  const signOptions: SignOptions = { expiresIn: refreshTokenExpiry };

  return jwt.sign(payload, refreshTokenSecret, signOptions)
}


const User = models.User || model<IUser>("User", userSchema);

export default User;