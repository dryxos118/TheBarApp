import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { BadRequestError } from "../errors/badRequestError";
import { log, LogLevel } from "../utils/logger";

declare module "express" {
  interface Request {
    user?: JwtPayload;
  }
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    log(LogLevel.WARN, "Authentification invalide");
    throw new BadRequestError("Authentification invalide");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    req.user = payload;

    console.log(payload);

    next();
  } catch (error) {
    log(LogLevel.WARN, "Authentification invalide");
    throw new BadRequestError("Authentification invalide");
  }
};
