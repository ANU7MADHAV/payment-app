import { NextRequest } from "next/server";

const isAuthenticated = (request: NextRequest): boolean => {
  const token = request.cookies.get("token")?.value;
  if (token) {
    return true;
  } else {
    return false;
  }
};

export default isAuthenticated;
