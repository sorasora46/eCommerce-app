import { Schema, model } from "mongoose";

export enum UserRole {
  CUSTOMER = "CUSTOMER",
  SHOP = "SHOP",
}

export interface IUser {
  userId: string;
  email: string;
  role: UserRole;
}

const userSchema = new Schema<IUser>({
  userId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
});

export const User = model("User", userSchema);
