import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utilities/db";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  console.log(body);
  const { id } = body;
  const toUser = await prisma?.user.findUnique({
    where: {
      id,
    },
  });
  if (!toUser) {
    return NextResponse.json({ message: "to user doesn't exist", status: 404 });
  }
  const { firstName, username } = toUser;
  return NextResponse.json({
    message: "user exist ",
    firstName,
    username,
    status: 200,
  });
};
