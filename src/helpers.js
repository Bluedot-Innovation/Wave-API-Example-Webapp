export class CustomError extends Error {
  constructor(errorCode, message, ...params) {
    super(...params);
    this.errorCode = errorCode;
    this.message = message;
  }
}
