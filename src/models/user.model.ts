import { IUser } from "@/interfaces/user.interface";
import { Document, Schema, model } from "mongoose";

const UserSchema: Schema = new Schema({
  userName: String,
  password: String,
});

const UserModel = model<IUser & Document>("UserSchema", UserSchema);

export default UserModel;
