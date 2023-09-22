import { describe, it, expect } from "vitest";
import { UserAge } from "./UserAge";

describe("UserAge", () => {
  it("should create an UserAge object", () => {
    let userAge = new UserAge(19);
    expect(userAge).toBeInstanceOf(UserAge);
  });
  //   it("should throw an error when user is not an adult", () => {
  //     let userAge = new UserAge(15);
  //     expect(userAge.ensureIsAdult()).toThrow("User is not an adult");
  //   });
});
