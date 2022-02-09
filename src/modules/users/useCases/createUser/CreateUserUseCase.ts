import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email }: IRequest): User {
    const userAllReadyExists = this.usersRepository.findByEmail(email);

    if (userAllReadyExists) {
      throw new Error("User all ready exists.");
    }
    const user = this.usersRepository.create({ name, email });

    return user;
  }
}

export { CreateUserUseCase };
