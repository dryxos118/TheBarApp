import { Request, Response } from "express";
import { db } from "../utils/db";
import { StatusCodes } from "http-status-codes";
import { User } from "../models/user";
import { NotFoundError } from "../errors/notFoundError";
import {
  deleteUserQuery,
  findUserByIdQuery,
  getAllUsersQuery,
  updateUserQuery,
} from "../queries/userQueries";
import { ResultSetHeader } from "mysql2";

export const getAllUsers = async (req: Request, res: Response) => {
  const [users] = await db.query(getAllUsersQuery);

  res.status(StatusCodes.OK).json({ users: users });
};

export const findUserById = async (req: Request, res: Response) => {
  const userId = req.params.id;

  const [users] = await db.query(findUserByIdQuery, [userId]);
  const user = (users as User[])[0];

  if (!user) {
    throw new NotFoundError("User not found");
  }

  res.status(StatusCodes.OK).json({ user: user });
};

export const updateUser = async (req: Request, res: Response) => {
  const user: User = req.body;

  const [result] = await db.query(updateUserQuery, [
    user.firstName,
    user.lastName,
    user.age,
    user.role,
    user.id,
  ]);

  res.status(StatusCodes.OK).json({ message: "User updated" });
};

export const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params.id;

  const [result] = await db.query(deleteUserQuery, [userId]);

  const ress = result as ResultSetHeader;

  console.log(ress.affectedRows);

  res.status(StatusCodes.OK).json({ message: "User deleted successfully" });
};
