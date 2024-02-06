import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import isAuthenticated from "./utilities/isAuthenticated";

export function middleware(request: NextRequest) {
  const token = isAuthenticated(request);

  if (!token) {
    return NextResponse.redirect(new URL("/signup", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|signin|signup|_next/static|_next/image|.*\\.png$).*)"],
};
