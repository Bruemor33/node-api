import { EmailNotValidException } from "../exceptions/email-password.exception";
export class Email {
  private readonly value: string;
  public static of(email: string): Email {
    if (Email.isValidEmail(email)) {
      return new Email(email);
    }
    throw new EmailNotValidException();
  }
  private static isValidEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  private constructor(email: string) {
    this.value = email;
  }
  public getValue() {
    return this.value;
  }
}
