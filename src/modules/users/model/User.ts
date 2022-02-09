import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor(
    id?: string,
    name: string = "",
    admin: boolean = false,
    email: string = "",
    created_at: Date = new Date(),
    updated_at: Date = new Date()
  ) {
    this.id = id || uuidV4();
    this.name = name;
    this.admin = admin || false;
    this.email = email;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

export { User };
