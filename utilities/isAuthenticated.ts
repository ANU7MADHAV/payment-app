import { NextRequest } from "next/server";

const isAuthenticated = (request: NextRequest): boolean => {
  const token = request.cookies.get("token" && "_vercel_jwt")?.value;
  if (token) {
    return true;
  } else {
    return false;
  }
};

export default isAuthenticated;
