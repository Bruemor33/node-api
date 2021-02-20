export class PasswordNotValidException extends Error {
  constructor() {
    super("Password not valid");
  }
}
export class EmailNotValidException extends Error {
  constructor() {
    super("Email is not valid");
  }
}
