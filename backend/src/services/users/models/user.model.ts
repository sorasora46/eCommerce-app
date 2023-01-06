import { Schema, model } from "mongoose";

export interface IUser {
  userId: string;
  email: string;
  role: string;
}

const userSchema = new Schema<IUser>({
  userId: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
});

export const User = model("User", userSchema);
