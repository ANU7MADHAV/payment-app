import { getUser } from "@/utilities/getUser";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utilities/db";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { broadband, amount } = body;

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
  const findBroadband = await prisma.broadband.findUnique({
    where: {
      broadband,
    },
  });
  if (!findBroadband) {
    const createBroadband = await prisma.broadband.create({
      data: {
        broadband,
        balance: 0,
      },
    });
    if (!createBroadband) {
      return NextResponse.json({
        message: "New board failed to create",
        status: 400,
      });
    }
    const numAmount = Number(amount);
    const currentUserBalance = currentUserAccount.balance - numAmount;
    const currenBroadbandBalance = createBroadband.balance + numAmount;

    const payBill = await prisma.$transaction([
      prisma.account.update({
        where: {
          userId: currentUserAccount.userId,
        },
        data: {
          balance: currentUserBalance,
        },
      }),
      prisma.broadband.update({
        where: {
          id: createBroadband.id,
        },
        data: {
          balance: currenBroadbandBalance,
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
  const currenGasBalance = findBroadband.balance + numAmount;

  const payBill = await prisma.$transaction([
    prisma.account.update({
      where: {
        userId: currentUserAccount.userId,
      },
      data: {
        balance: currentUserBalance,
      },
    }),
    prisma.broadband.update({
      where: {
        id: findBroadband.id,
      },
      data: {
        balance: currenGasBalance,
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
