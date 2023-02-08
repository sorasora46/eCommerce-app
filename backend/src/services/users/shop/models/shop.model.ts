import { Schema, model } from "mongoose";

export interface IUpdateShop {
  email?: string;
  name?: string;
  profileImage?: Buffer;
}

export interface IShop {
  userId: string;
  email: string;
  name: string;
  profileImage: Buffer;
}

const shopSchema = new Schema<IShop>({
  userId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  profileImage: { type: Buffer, required: true },
});

export const Shop = model("Shop", shopSchema);
