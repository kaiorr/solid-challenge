import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";
import { v4 as uuidv4 } from "uuid";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      id: uuidv4(),
      name,
      admin: false,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    if (!name || !email) {
      throw new Error("Email is required");
    }
    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    const userExistis = this.users.find((user) => user.id === id);
    return userExistis;
  }

  findByEmail(email: string): User | undefined {
    const emailExists = this.users.find((user) => user.email === email);
    return emailExists;
  }

  turnAdmin(receivedUser: User): User {
    const user = this.users.find((user) => user.id === receivedUser.id);

    if (!user) {
      throw new Error("User not found");
    }

    user.admin = true;
    user.updated_at = new Date();

    this.users.push(user);
    return user;
  }

  list(): User[] {
    const user = new User();

    if (!user) {
      throw new Error("User not found");
    }

    return this.users;
  }
}

export { UsersRepository };
