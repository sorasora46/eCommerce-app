import { Schema, model } from "mongoose";

export enum Role {
  SHOP = "shop",
  CUSTOMER = "customer",
}

export interface IUser {
  userId: string;
  email: string;
  role: Role;
  blockList?: string[]; // list of userId
}

const userSchema = new Schema<IUser>({
  userId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  blockList: { type: [String] },
});

export const User = model("User", userSchema);
