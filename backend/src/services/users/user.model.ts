import { Schema, model } from "mongoose";

interface User {
  userId: string;
  email: string;
  fname: string;
  lname: string;
  dateOfBirth: Date;
  profileImage?: string;
}

const userSchema = new Schema<User>({
  userId: { type: String, required: true },
  email: { type: String, required: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  profileImage: { type: String, required: false },
});

export const User = model("User", userSchema)