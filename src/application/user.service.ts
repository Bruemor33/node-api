import { UserDatabase } from "../db/user/interfaces/user.interface";
import { EmailNotValidException } from "../exceptions/email-password.exception";
import { UserModel } from "../models/user.model";
import { ApplicationService } from "./application.service";

export class UserService implements ApplicationService {
  private readonly userDatabase: UserDatabase;

  public constructor(userDatabase: UserDatabase) {
    this.userDatabase = userDatabase;
  }

  public async create(user: UserModel): Promise<UserModel> {
    if (!(await this.userDatabase.isEmailUnique(user.email))) {
      throw new EmailNotValidException();
    }

    return await this.userDatabase.create(user);
  }

  static getType(): string {
    return "UserService";
  }
}
