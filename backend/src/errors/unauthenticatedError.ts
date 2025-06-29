import { CustomError } from "./customError";

export class UnauthenticatedError extends CustomError {
  statusCode = 401;

  constructor(message = "Not authorized") {
    super(message);
    Object.setPrototypeOf(this, UnauthenticatedError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
