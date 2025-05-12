import { CustomError } from "./CustomError";

export class ForbiddenError extends CustomError {
  statusCode = 403;

  constructor(message = "Forbidden access") {
    super(message);
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
