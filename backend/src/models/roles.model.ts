// import { Schema, models, model, Document } from "mongoose";

// enum AllowedRoles {
//   Admin = "admin",
//   SuperAdmin = "superadmin",
//   Caller = "caller",
//   Account = "account",
// }

// export interface IRole extends Document {
//   roleName: AllowedRoles;
//   status: boolean;
// }

// const roleSchema: Schema<IRole> = new Schema({
//   roleName: {
//     type: String,
//     required: [true, "A role must have a name"],
//     enum: Object.values(AllowedRoles),
//     default: AllowedRoles.Admin,
//     unique: true,
//     trim: true,
//   },
//   status: {
//     type: Boolean,
//     required: [true, "Please specify the status"],
//     default: true,
//   }
// });

// const Role = models.Role || model<IRole>("Role", roleSchema);

// export default Role;