import prisma from "@/utilities/db";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) || "";

  const { data } = body;
  try {
    const users = await prisma.user.findMany({
      where: {
        OR: [
          { firstName: { startsWith: data, mode: "insensitive" } },
          { lastName: { contains: data, mode: "insensitive" } },
        ],
      },
      select: {
        username: true,
        firstName: true,
        lastName: true,
        id: true,
      },
    });
    return NextResponse.json({ message: "users", users });
  } catch (error) {
    console.error("Something went wrong:", error);
    return NextResponse.json({ message: "something unexpected happen" });
  }
};

export const GET = async (request: NextRequest) => {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ message: "Token doesn't exits", status: 400 });
  }
  const decoded = jwt.verify(token, process.env.TOKEN_STORE as string) as {
    userId: string;
  };

  if (!decoded) {
    return NextResponse.json({ message: "decoded doesn't exist", status: 400 });
  }

  const { userId } = decoded;

  try {
    const currentUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!currentUser) {
      return NextResponse.json({ message: "current user doesn't exist" });
    }
    return NextResponse.json({ message: "current user", currentUser });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "something is worng", error });
  }
};
