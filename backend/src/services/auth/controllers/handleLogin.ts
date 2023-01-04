import { Request, Response } from "express";
import { authUser } from "../models/authUser.model.js";
import { IUser, User } from "../../users/user.model.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jsonwebtoken from "jsonwebtoken";
import { storedRefreshToken } from "../models/refreshToken.model.js";

export const handleLogin = async (req: Request, res: Response) => {
  try {
    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

    const { email, password } = req.body;
    validateUserData(email, password).catch((err) => {
      throw err;
    });

    const user = await User.findOne({ email: email }); // Find user data by email
    const expiration = "6h"; // Expiration of token
    const { accessToken, refreshToken } = createLoginToken(user, expiration);
    saveRefreshToken(refreshToken, user.userId);
    req.user = user; // Atttach user object to req object

    // Setting cookies
    res
      .cookie("access_token", `Bearer ${accessToken}`, {
        // maxAge: 3600000,
        maxAge: 1000 * 10,
        httpOnly: true,
      })
      .cookie("refresh_token", `${refreshToken}`, {
        // maxAge: 6 * 3600000,
        maxAge: 1000 * 60,
        httpOnly: true,
      })
      .json({ redirectUrl: "http://127.0.0.1:5173", loginSuccess: true });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

async function validateUserData(
  email: string,
  password: string
): Promise<boolean> {
  // Find user's hashedPassword by the email
  const { hashedPassword } = await authUser.findOne({ email: email });

  // Check if the email exist
  if (!hashedPassword) throw new Error("Incorrect email");

  // Check if the password is correct
  if (!(await bcrypt.compare(password, hashedPassword)))
    throw new Error("Incorrect password");
  return true;
}

function createLoginToken(user: IUser, expiration: string) {
  // Create access token
  const accessToken = jsonwebtoken.sign(
    { ...user },
    "very secret access_token_secret string",
    { expiresIn: expiration }
  );

  // Create refresh token
  const refreshToken = jsonwebtoken.sign(
    { ...user },
    "very secret refresh_token_secret string"
  );

  return { accessToken: accessToken, refreshToken: refreshToken };
}

async function saveRefreshToken(refreshToken: string, userId: string) {
  // Get old refresh token
  const storedToken = await storedRefreshToken.findOne({ userId: userId });

  // Check if the user already own refresh token
  // If it exists then delete it
  if (storedToken) {
    await storedRefreshToken.findOneAndDelete({ userId: userId });
  }

  // Hash the refresh token
  const salt = await bcrypt.genSalt();
  const token = await bcrypt.hash(refreshToken, salt);

  // Store the hashed refresh token
  const result = await storedRefreshToken.create({
    hashedToken: token,
    userId: userId,
  });
  result
    .save()
    .then()
    .catch((err) => {
      throw err;
    });
}
