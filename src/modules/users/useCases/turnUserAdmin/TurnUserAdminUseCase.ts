import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const getUserAdminById = this.usersRepository.findById(user_id);

    if (!getUserAdminById) {
      throw new Error("User not found.");
    }
    const turnUserAdmin = this.usersRepository.turnAdmin(getUserAdminById);

    return turnUserAdmin;
  }
}

export { TurnUserAdminUseCase };
