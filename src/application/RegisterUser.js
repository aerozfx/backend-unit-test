import { User } from "../domain/User";

export class RegisterUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(name, email, password, age) {
    const user = new User(crypto.randomUUID(), name, email, password, age);

    if (await this.userRepository.existsByEmail(user.email)) {
      throw new Error("User already exists");
    }

    this.userRepository.save(user);
  }
}
