import { Schema, model } from "mongoose";

export interface IHashedRefreshToken {
  hashedRefreshToken: string;
  userId: string;
  expireAt?: Date;
}

const hashedRefreshTokenSchema = new Schema<IHashedRefreshToken>({
  hashedRefreshToken: { type: String, required: true, unique: true },
  userId: { type: String, required: true, unique: true },
  expireAt: {
    type: Date,
    default: new Date(),
    expires: 60 * 60 * 12,
  },
});

export const HashedRefreshToken = model("Token", hashedRefreshTokenSchema);
