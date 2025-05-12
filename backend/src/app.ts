import express, { ErrorRequestHandler } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRoute";
import usersRouter from "./routes/userRoute";
import { auth } from "./middleware/authMiddleware";
import { errorHandler } from "./middleware/errorMiddleware";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", auth, usersRouter);

app.use(errorHandler as ErrorRequestHandler);

export default app;
