import { Request, Response } from "express";
import { RegisterDto } from "../models/dto/registerDto";
import { StatusCodes } from "http-status-codes";
import { LoginDto } from "../models/dto/loginDto";
import { db } from "../utils/db";
import { User, UserRole } from "../models/user";
import {
  comparePasswords,
  generateToken,
  hashPassword,
} from "../services/authServices";
import {
  loginQuery,
  registerQuery,
  userCountQuery,
  userExistingQuery,
} from "../queries/authQueries";

export const register = async (req: Request, res: Response) => {
  const data: RegisterDto = req.body;

  console.log(data.userName);

  const [existing] = await db.query(userExistingQuery, [data.userName]);
  if ((existing as any[]).length > 0) {
    throw new Error("Username already exists");
  }

  const [users] = await db.query(userCountQuery);
  const isFirstUser = (users as any)[0].count === 0;

  const userRole: UserRole = isFirstUser ? "admin" : "client";

  const hashedPassword = await hashPassword(data.password);

  const [result]: any = await db.query(registerQuery, [
    data.userName,
    hashedPassword,
    data.firstName,
    data.lastName,
    data.age,
    userRole,
  ]);

  const user: User = {
    id: result.insertId,
    username: data.userName,
    firstName: data.firstName,
    lastName: data.lastName,
    age: data.age,
    role: userRole,
    password: hashedPassword,
    lastLogin: new Date(),
  };

  const token = generateToken(user);

  res
    .status(StatusCodes.CREATED)
    .json({ message: "User registered", token, user });
};

export const login = async (req: Request, res: Response) => {
  const data: LoginDto = req.body;

  const [rows] = await db.query(loginQuery, [data.userName]);
  const user = (rows as User[])[0];

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const valid = await comparePasswords(data.password, user.password);
  if (!valid) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken({
    id: user.id,
    username: user.username,
    role: user.role,
  });

  req.user = {
    id: user.id.toString(),
    username: user.username,
  };

  await db.query("UPDATE users SET last_login = NOW() WHERE id = ?", [user.id]);

  res.status(StatusCodes.OK).json({
    message: "Login successful",
    token,
    user: { id: user.id, username: user.username, role: user.role },
  });
};
