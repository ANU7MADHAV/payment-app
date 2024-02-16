import { getUser } from "@/utilities/getUser";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utilities/db";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { dth, amount } = body;

  const user = getUser(req);
  if (!user) {
    console.log("No user");
    return NextResponse.json({ message: "No user details", status: 400 });
  }

  const userId = (user as { userId: string }).userId;

  const fromUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!fromUser) {
    return NextResponse.json({ message: "User doesn't exist", status: 404 });
  }

  const currentUserAccount = await prisma.account.findUnique({
    where: {
      userId: fromUser?.id,
    },
  });

  if (!currentUserAccount) {
    return NextResponse.json({
      message: "current user account doesn't exist",
      status: 400,
    });
  }
  const findDth = await prisma.dth.findUnique({
    where: {
      dth,
    },
  });
  if (!findDth) {
    const createDth = await prisma.dth.create({
      data: {
        dth,
        balance: 0,
      },
    });
    if (!createDth) {
      return NextResponse.json({
        message: "New board failed to create",
        status: 400,
      });
    }
    
    const numAmount = Number(amount);
    const currentUserBalance = currentUserAccount.balance - numAmount;
    const currenDthBalance = createDth.balance + numAmount;

    const payBill = await prisma.$transaction([
      prisma.account.update({
        where: {
          userId: currentUserAccount.userId,
        },
        data: {
          balance: currentUserBalance,
        },
      }),
      prisma.dth.update({
        where: {
          id: createDth.id,
        },
        data: {
          balance: currenDthBalance,
        },
      }),
    ]);
    if (!payBill) {
      return NextResponse.json({ message: "Transaction failed", status: 400 });
    }
    return NextResponse.json({
      message: "Transaction updated succesfully",
      status: 200,
    });
  }
  const numAmount = Number(amount);
  const currentUserBalance = currentUserAccount.balance - numAmount;
  const currenDthrBalance = findDth.balance + numAmount;

  const payBill = await prisma.$transaction([
    prisma.account.update({
      where: {
        userId: currentUserAccount.userId,
      },
      data: {
        balance: currentUserBalance,
      },
    }),
    prisma.dth.update({
      where: {
        id: findDth.id,
      },
      data: {
        balance: dth,
      },
    }),
  ]);
  if (!payBill) {
    return NextResponse.json({ message: "Transaction failed", status: 400 });
  }
  return NextResponse.json({
    message: "Transaction updated succesfully",
    status: 200,
  });
};
