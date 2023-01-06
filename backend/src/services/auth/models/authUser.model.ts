import { Schema, model } from "mongoose";

export interface IAuthUser {
  userId: string;
  hashedPassword: string;
}

const authUserSchema = new Schema<IAuthUser>({
  userId: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true },
});

export const AuthUser = model("Auth", authUserSchema);
