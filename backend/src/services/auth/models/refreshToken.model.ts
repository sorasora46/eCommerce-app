import { Schema, model } from "mongoose";

export interface IHashedRefreshToken {
  hashedRefreshToken: string;
  userId: string;
}

const hashedRefreshTokenSchema = new Schema<IHashedRefreshToken>({
  hashedRefreshToken: { type: String, required: true, unique: true },
  userId: { type: String, required: true, unique: true },
});

export const HashedRefreshToken = model("Token", hashedRefreshTokenSchema);
