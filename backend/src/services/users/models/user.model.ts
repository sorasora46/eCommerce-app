import { Schema, model } from "mongoose";

export interface IUser {
  userId: string;
  email: string;
  fname: string;
  lname: string;
  dateOfBirth: Date;
  role: string;
  profileImage?: string;
}

const userSchema = new Schema<IUser>({
  userId: { type: String, required: true },
  email: { type: String, required: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  role: { type: String, required: false },
  profileImage: { type: String, required: false },
});

export const User = model("User", userSchema);
