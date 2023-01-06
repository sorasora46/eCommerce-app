import { Schema, model } from "mongoose";

export interface IAuthUser {
  email: string;
  hashedPassword: string;
}

const authUserSchema = new Schema<IAuthUser>({
  email: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: false },
});

export const authUser = model("auth", authUserSchema);
