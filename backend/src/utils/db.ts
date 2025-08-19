import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { log, LogLevel } from "./logger";

// dotenv.config({ path: path.resolve(__dirname, "../../.env") });
dotenv.config();

export const db = mysql.createPool({
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
});

export async function testDBConnection() {
  try {
    const conn = await db.getConnection();
    await conn.ping();
    conn.release();
    log(LogLevel.INFO, "DB is up");
    return true;
  } catch (err) {
    log(LogLevel.ERROR, "DB is not connected");
    return false;
  }
}
