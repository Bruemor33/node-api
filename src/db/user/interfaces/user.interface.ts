import { Email } from "../../../common/email";
import { UserModel } from "../../../models/user.model";

export interface UserDatabase {
  isEmailUnique(email: Email): Promise<boolean>;
  create(companyUser: UserModel): Promise<UserModel>;
}
