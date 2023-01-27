import { Schema, model } from "mongoose";

export interface ICustomer {
  userId: string;
  name: {
    fname: string;
    lname: string;
  };
  dateOfBirth: Date;
  profileImage: Buffer;
}

const customerSchema = new Schema<ICustomer>({
  userId: { type: String, required: true, unique: true },
  name: {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
  },
  dateOfBirth: { type: Date, required: true },
  profileImage: { type: Buffer, required: true },
});

export const Customer = model("Customer", customerSchema);
