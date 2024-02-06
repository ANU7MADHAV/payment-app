import { getUser } from "@/utilities/getUser";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utilities/db";

export const GET = async (req: NextRequest) => {
  const user = getUser(req);
  if (!user) {
    console.log("No user");
    return NextResponse.json({ message: "No user details" });
  }

  const userId = (user as { userId: string }).userId;

  const userBalance = await prisma?.account.findUnique({
    where: {
      userId,
    },
  });
  if (!userBalance) {
    return NextResponse.json({ message: "Failed to get user balance" });
  }
  const balance = userBalance.balance;
  return NextResponse.json({ message: "user balance", balance });
};
