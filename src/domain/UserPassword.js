import crypto from "node:crypto";

export class UserPassword {
  constructor(password) {}

  static formPlain(plain) {
    crypto.createHash("sha256").update(plain).digest("hex");

    return new UserPassword(plain);
  }
}
