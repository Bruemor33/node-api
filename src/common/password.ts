import { PasswordNotValidException } from "../exceptions/email-password.exception";
import { hash } from "bcrypt";

export class Password {
  // todo move to env
  private static SALT_ROUNDS: number = 10;
  private static MIN_PASS_LENGTH: number = 6;

  private readonly value: string;

  private static async of(password: string): Promise<Password> {
    if (Password.isValidPassword(password)) {
      return await Password.create(password);
    }

    throw new PasswordNotValidException();
  }

  public static ofHash(hash: string): Password {
    return new Password(hash);
  }

  private static isValidPassword(password: string): boolean {
    return password.length >= Password.MIN_PASS_LENGTH;
  }

  private static async create(password: string) {
    const passwordHash = await hash(password, Password.SALT_ROUNDS);
    return new Password(passwordHash);
  }

  private constructor(hash: string = "") {
    this.value = hash;
  }

  public getHash() {
    return this.value;
  }
}
