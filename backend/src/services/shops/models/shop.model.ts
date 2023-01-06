import { Schema, model } from "mongoose";
import { IUser } from "../../users/models/user.model.js";

export interface IShop extends IUser {
  name: string;
  profileImage?: string;
}

const shopSchema = new Schema<IShop>({
  name: { type: String, required: true },
  profileImage: { type: String },
});

export const Shop = model("Shop", shopSchema);
