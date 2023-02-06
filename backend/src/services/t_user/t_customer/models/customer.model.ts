import { Schema, model } from "mongoose";

export interface IUpdateCustomer {
  email?: string;
  fname?: string;
  lname?: string;
  dateOfBirth?: Date;
  profileImage?: Buffer;
}

export interface ICustomer {
  userId: string;
  email: string;
  fname: string;
  lname: string;
  dateOfBirth: Date;
  profileImage: Buffer;
}

const customerSchema = new Schema<ICustomer>({
  userId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  profileImage: { type: Buffer, required: true },
});

customerSchema.index({ fname: 1, lname: 1 }, { unique: true });

export const Customer = model("Customer", customerSchema);
