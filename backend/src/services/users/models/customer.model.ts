import { Schema, model } from "mongoose";
import { IUser } from "./user.model.js";

export interface ICustomer extends IUser {
  name: {
    fname: string;
    lname: string;
  };
  dateOfBirth: Date;
  profileImage?: string;
}

const customerSchema = new Schema<ICustomer>({
  name: {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
  },
  dateOfBirth: { type: Date, required: true },
  profileImage: { type: String },
});

export const Customer = model("Customer", customerSchema);
