import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getUser = (req: NextRequest) => {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return null;
  }
  const decoded = jwt.verify(
    token,
    process.env.TOKEN_STORE as string,
    (err, user) => {
      if (err) {
        console.log(err);
        return null;
      }
      if (user) {
        return user;
      }
    },
  );

  return decoded;
};
