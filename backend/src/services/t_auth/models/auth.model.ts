import { Schema, model } from "mongoose";

export interface IAuth {
  userId: string;
  hashedPassword: string;
}

const authSchema = new Schema<IAuth>({
  userId: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true },
});

export const Auth = model("Auth", authSchema);
