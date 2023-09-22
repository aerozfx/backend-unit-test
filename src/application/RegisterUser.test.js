import { describe, it, expect } from "vitest";
import { User } from "../domain/User.js";
import { RegisterUser } from "./RegisterUser.js";

describe("RegisterUser", () => {
  it("should register an user", async () => {
    const userRepository = new UserRepositoryMock();
    const registerUser = new RegisterUser(userRepository);

    await registerUser.execute("Nuevo", "nuevo@email.com", "123456", 22);

    expect(userRepository.saveHaveBeenCalled).toEqual(true);
  });
});
