import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = () => {
  cookies().delete("token");

  return NextResponse.json({
    message: "Cookies deleted succesfully",
    status: 200,
  });
};
