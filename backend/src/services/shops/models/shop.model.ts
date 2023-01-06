import { Schema, model } from "mongoose";

export interface IShop {
  userId: string;
  name: string;
  profileImage?: string;
}

const shopSchema = new Schema<IShop>({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  profileImage: { type: String },
});

export const Shop = model("Shop", shopSchema);
