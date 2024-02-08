import { getUser } from "@/utilities/getUser";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utilities/db";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { to, amount } = body;

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
    return NextResponse.json({ message: "To account doesn't exist" });
  }
  const toAccountBalance = Number(toAccount.balance);
  const toBalance = toAccountBalance + numberAmount;

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
    return NextResponse.json({ message: "Transfer is failed", status: 400 });
  }

  // const fromTransfer = await prisma?.account.update({
  //   where: {
  //     userId: account.userId,
  //   },
  //   data: {
  //     balance: fromBalance,
  //   },
  // });

  // if (!fromTransfer) {
  //   return NextResponse.json({ message: "From account transcation is failed" });
  // }

  // const toTransfer = await prisma?.account.update({
  //   where: {
  //     userId: toAccount.userId,
  //   },
  //   data: {
  //     balance: toBalance,
  //   },
  // });

  // if (!toTransfer) {
  //   return NextResponse.json({ message: "Transcation is failed" });
  // }

  return NextResponse.json({ message: "Transcation is updated Succesfully" });
};
