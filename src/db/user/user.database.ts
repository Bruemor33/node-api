import { UserModel } from "../../models/user.model";
import { UserDatabase } from "./interfaces/user.interface";

export class UserInMemoryDb implements UserDatabase {
  private users: UserModel[] = [];

  create(user: UserModel): Promise<UserModel> {
    this.users.push(user);
    return Promise.resolve(user);
  }

  isEmailUnique(email: Email): Promise<boolean> {
    return Promise.resolve(
      !this.users.find((x) => x.email.getValue() === email.getValue()),
    );
  }
}
