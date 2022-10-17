import { Error as httpCodeError } from "./httpCodes";

export class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = httpCodeError.BadRequest) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
