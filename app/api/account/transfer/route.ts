import { getUser } from "@/utilities/getUser";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utilities/db";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { to, amount, pin } = body;

  console.log(to, amount);

  const user = getUser(req);
  if (!user) {
    console.log("No user");
    return NextResponse.json({ message: "No user details" });
  }

  const userId = (user as { userId: string }).userId;

  const account = await prisma?.account.findUnique({
    where: {
      userId,
    },
  });
  if (!account) {
    return NextResponse.json({ message: "account deosn't exist" });
  }
  const fromAccount = account.balance;
  const numberAmount = Number(amount);
  const fromBalance = fromAccount - numberAmount;

  if (fromAccount < amount) {
    return NextResponse.json({ message: "insufficient amount", amount });
  }

  const toAccount = await prisma?.account.findUnique({
    where: {
      userId: to,
    },
  });
  if (!toAccount) {
    return NextResponse.json({
      message: "To account doesn't exist",
      success: false,
    });
  }
  const toAccountBalance = Number(toAccount.balance);
  const toBalance = toAccountBalance + numberAmount;

  const findPin = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      pin: true,
    },
  });
  const checkPin = findPin?.pin;
  console.log("type of checkpin", checkPin, typeof checkPin);
  const numPin = Number(pin);
  console.log("type of numPin", numPin, typeof numPin);

  if (numPin !== checkPin) {
    return NextResponse.json({
      message: "Pin is not matching",
      status: 400,
      success: false,
    });
  }

  const transfer = await prisma?.$transaction([
    prisma.account.update({
      where: {
        userId: account.userId,
      },
      data: {
        balance: fromBalance,
      },
    }),
    prisma.account.update({
      where: {
        userId: toAccount.userId,
      },
      data: {
        balance: toBalance,
      },
    }),
  ]);

  if (!transfer) {
    return NextResponse.json({
      message: "Transfer is failed",
      status: 400,
      success: false,
    });
  }

  return NextResponse.json({
    message: "Transcation is updated Succesfully",
    success: true,
  });
};
