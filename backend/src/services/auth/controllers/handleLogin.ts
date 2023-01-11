import { Request, Response } from "express";
import { AuthUser } from "../models/authUser.model.js";
import { IUser, User } from "../../users/models/user.model.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jsonwebtoken from "jsonwebtoken";
import { HashedRefreshToken } from "../models/refreshToken.model.js";

export const handleLogin = async (req: Request, res: Response) => {
  try {
    const { access_token, refresh_token } = req.signedCookies;

    // If both tokens exist then redirect to home page
    if (access_token && refresh_token) {
      return res.json({
        redirectUrl: "http://127.0.0.1:5173",
        alreadyLogin: true,
      });
    }

    await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

    const { email, password } = req.body;
    const user = await User.findOne({ email: email }); // Find user data by email

    validateUserData(user.userId, password).catch((err) => {
      throw err;
    });

    const expiration = "6h"; // Expiration of token
    const { accessToken, refreshToken } = createLoginToken(user, expiration);
    saveRefreshToken(refreshToken, user.userId);

    // Setting cookies
    res
      .cookie("access_token", `Bearer ${accessToken}`, {
        maxAge: 3600000 * 6, // 6 hours
        signed: true,
        httpOnly: true,
      })
      .cookie("refresh_token", `${refreshToken}`, {
        maxAge: 3600000 * 12, // 12 hours
        signed: true,
        httpOnly: true,
      })
      .json({ redirectUrl: "http://127.0.0.1:5173", loginSuccess: true });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

async function validateUserData(
  userId: string,
  password: string
): Promise<boolean> {
  // Find user's hashedPassword by the email
  const { hashedPassword } = await AuthUser.findOne({ userId: userId });

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
  const storedToken = await HashedRefreshToken.findOne({ userId: userId });

  // Check if the user already own refresh token
  // If it exists then delete it
  if (storedToken) {
    await HashedRefreshToken.findOneAndDelete({ userId: userId });
  }

  // Hash the refresh token
  const salt = await bcrypt.genSalt();
  const token = await bcrypt.hash(refreshToken, salt);

  // Store the hashed refresh token
  const result = await HashedRefreshToken.create({
    hashedRefreshToken: token,
    userId: userId,
  });
  result
    .save()
    .then()
    .catch((err) => {
      throw err;
    });
}
