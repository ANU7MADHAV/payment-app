import { getUser } from "@/utilities/getUser";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utilities/db";

export const POST = async (req: NextRequest) => {
  const { pin } = await req.json();
  console.log("pin", pin);
  const user = getUser(req);
  if (!user) {
    console.log("No user");
    return NextResponse.json({ message: "No user details" });
  }

  const userId = (user as { userId: string }).userId;

  const findPin = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      pin: true,
    },
  });
  const checkPin = findPin?.pin;
  console.log(typeof checkPin);
  const numPin = Number(pin);
  console.log(typeof numPin);

  if (!checkPin) {
    const updatePin = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        pin: numPin,
      },
    });
    if (!updatePin) {
      return NextResponse.json({ message: "Update failed ", status: 400 });
    }
  }
  console.log("numpin", numPin);
  console.log("checkPin", checkPin);
  if (numPin !== checkPin) {
    return NextResponse.json({ message: "Pin is not matching", status: 400 });
  }

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
