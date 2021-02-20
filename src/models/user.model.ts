import { Email } from "../common/email";
import { Password } from "../common/password";

export class UserModel {
  firstName: string;
  lastName: string;
  email: Email;
  password: Password;

  constructor(
    firstName: string,
    lastName: string,
    email: Email,
    password: Password,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}
