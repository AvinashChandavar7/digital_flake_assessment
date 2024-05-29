import mongoose, { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  mobile: string;
  email: string;
  password: string;
  roles: mongoose.Types.ObjectId[];
  photo?: string;
}

const userSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: [true, "A user must have a name"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    mobile: {
      type: String,
      required: [true, "Please provide a valid moblie."],
      index: true,
    },
    email: {
      type: String,
      required: [true, "Please provide a valid email."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please provide passwords."],
      minlength: 8,
      select: false,
    },
    photo: {
      type: String,
      default: 'default.jpg',
    },
    roles: [{ type: Schema.Types.ObjectId, ref: 'Role', }],
  },
  { timestamps: true }
);




const User = models.User || model<IUser>("User", userSchema);

export default User;