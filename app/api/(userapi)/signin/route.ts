import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utilities/db";
import { compare } from "bcrypt";
import { generateAccessToken } from "@/utilities/tokenGenerate";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  console.log("body", body);
  const { username, password } = body;
  const checkUsername = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  if (!checkUsername) {
    return NextResponse.json({ message: "User doesn't exist", status: 404 });
  }
  const passwordMatch = await compare(password, checkUsername.password);
  if (!passwordMatch) {
    return NextResponse.json({ message: "Password is incorrect", status: 400 });
  }
  const userId = checkUsername.id;
  const token = generateAccessToken(userId);

  const onlineUser = await prisma.user.update({
    where: {
      id: checkUsername.id,
    },
    data: {
      online: true,
    },
  });
  if (!onlineUser) {
    return NextResponse.json({
      message: "Online user failed to update ",
      status: 400,
    });
  }

  const response = NextResponse.json({
    message: "Succesfully logged",
    success: true,
    token,
  });
  response.cookies.set("token", token);

  return response;
};
