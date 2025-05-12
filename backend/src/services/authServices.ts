import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const comparePasswords = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export const generateToken = (user: Pick<User, "id" | "username" | "role">) => {
  return jwt.sign(user, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });
};
