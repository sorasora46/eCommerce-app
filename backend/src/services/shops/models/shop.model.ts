import { Schema, model } from "mongoose";

export interface IShop {
  userId: string;
  name: string;
  profileImage: Buffer;
}

const shopSchema = new Schema<IShop>({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  profileImage: { type: Buffer, required: true },
});

export const Shop = model("Shop", shopSchema);
