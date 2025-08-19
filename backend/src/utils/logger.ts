import pino, { LoggerOptions } from "pino";
import path from "path";
import fs from "fs";

const logsDir = path.join(__dirname, "../logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

export enum LogLevel {
  TRACE = "trace",
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
  FATAL = "fatal",
}

const isDev = process.env.NODE_ENV !== "production";

const transport = pino.transport({
  targets: [
    ...(isDev
      ? ([
          {
            target: "pino-pretty",
            options: {
              translateTime: "SYS:yyyy-mm-dd HH:MM:ss.l o",
              singleLine: true,
            },
            level: "info",
          },
        ] as any[])
      : []),
    {
      target: "pino/file",
      options: { destination: path.join(logsDir, "app.log"), mkdir: true },
      level: "info",
    },
    {
      target: "pino/file",
      options: { destination: path.join(logsDir, "error.log"), mkdir: true },
      level: "error",
    },
  ],
});

const baseOptions: LoggerOptions = {
  level: process.env.LOG_LEVEL ?? "info",
  base: undefined,
  timestamp: pino.stdTimeFunctions.isoTime,
};

const pLog = pino(baseOptions, transport);

export function log(
  level: LogLevel,
  message: string,
  data?: Record<string, unknown>
) {
  switch (level) {
    case LogLevel.TRACE:
      data ? pLog.trace(data, message) : pLog.trace(message);
      break;
    case LogLevel.INFO:
      data ? pLog.info(data, message) : pLog.info(message);
      break;
    case LogLevel.WARN:
      data ? pLog.warn(data, message) : pLog.warn(message);
      break;
    case LogLevel.ERROR:
      data ? pLog.error(data, message) : pLog.error(message);
      break;
    case LogLevel.FATAL:
      data ? pLog.fatal(data, message) : pLog.fatal(message);
      break;
  }
}
