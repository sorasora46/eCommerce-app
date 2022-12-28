
import { Schema, model } from "mongoose";

interface IRefreshToken {
  hashedToken: string;
  userId: string;
}

const refreshTokenSchema = new Schema<IRefreshToken>({
  hashedToken: { type: String, required: true },
  userId: { type: String, required: true },
});

export const hashedToken = model("token", refreshTokenSchema);
