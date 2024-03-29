import jwt from "jsonwebtoken";

export function generateAccessToken(userId: string) {
  return jwt.sign({ userId }, process.env.TOKEN_STORE!, {
    expiresIn: "1d",
  });
}
