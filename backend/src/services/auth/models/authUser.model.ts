import { Schema, model } from "mongoose";

interface authUser {
  email: string;
  hashedPassword: string;
}

const authUserSchema = new Schema<authUser>({
  email: { type: String, required: true },
  hashedPassword: { type: String, required: false },
});

export const authUser = model("auth", authUserSchema);
