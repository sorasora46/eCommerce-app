import { Schema, model } from "mongoose";

export interface IRefreshToken {
  hashedToken: string;
  userId: string;
}

const refreshTokenSchema = new Schema<IRefreshToken>({
  hashedToken: { type: String, required: true, unique: true },
  userId: { type: String, required: true, unique: true },
});

export const storedRefreshToken = model("Token", refreshTokenSchema);
