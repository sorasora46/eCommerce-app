import { Schema, model } from "mongoose";

interface Shop {
  shopId: string;
  sEmail: string;
  sName: string;
  role: string;
  sProfileImage?: string;
}

const shopSchema = new Schema<Shop>({
  shopId: { type: String, required: true },
  sEmail: { type: String, required: true },
  sName: { type: String, required: true },
  role: { type: String, required: true },
  sProfileImage: { type: String, required: false },
});

export const Shop = model("Shop", shopSchema);
