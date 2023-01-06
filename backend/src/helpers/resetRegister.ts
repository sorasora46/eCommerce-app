import mongoose from "mongoose";
import { AuthUser } from "../services/auth/models/authUser.model.js";
import { User } from "../services/users/models/user.model.js";

export const resetRegister = async (
  isAuthRegistered: boolean,
  email: string
) => {
  try {
    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

    if (!isAuthRegistered) {
      await User.findOneAndDelete({ email: email });
    } else {
      const { userId } = await User.findOne({ email: email });
      await AuthUser.findOneAndDelete({ userId: userId });
      await User.findOneAndDelete({ email: email });
    }
  } catch (error: any) {
    throw error;
  }
};
