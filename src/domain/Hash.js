export class Hash {
  hashString = async (password) => {
    const { createHmac } = await import("node:crypto");

    const secret = "abcdefg";
    const hash = createHmac("sha256", secret).update("password").digest("hex");
  };
}
