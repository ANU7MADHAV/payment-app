import { userSchema } from "@/utilities/serverValidationSchema";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utilities/db";
import bcrypt from "bcrypt";

import { generateAccessToken } from "@/utilities/tokenGenerate";

type User = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
};

export const POST = async (req: NextRequest) => {
  const body: User = await req.json();
  const res = userSchema.safeParse(body);
  if (!res.success) {
    const { errors } = res.error;
    return NextResponse.json(
      { error: { message: "Internal Server Error", errors } },
      { status: 500 },
    );
  }
  const { firstName, lastName, username, password } = body;

  const checkUser = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  if (checkUser) {
    return NextResponse.json({ message: "User is already exist", status: 400 });
  }
  const hashPassword = await bcrypt.hash(password, 10);
  console.log(hashPassword);
  const createUser = await prisma.user.create({
    data: {
      firstName,
      lastName,
      username,
      password: hashPassword,
    },
  });
  if (!createUser) {
    return NextResponse.json({ message: "user is not created", status: 400 });
  }
  const userId = createUser.id;
  const accountBalance = Math.random() * 1000;
  const createBalance = await prisma.account.create({
    data: {
      userId,
      balance: accountBalance,
    },
  });

  if (!createBalance) {
    return NextResponse.json({ message: "Balance is not added", status: 400 });
  }

  const token = generateAccessToken(userId);

  const response = NextResponse.json({
    message: "User is created",
    success: true,
  });
  response.cookies.set("token", token);

  return response;
};
