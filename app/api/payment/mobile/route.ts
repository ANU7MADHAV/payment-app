import { getUser } from "@/utilities/getUser";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utilities/db";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { operator, amount } = body;

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

  const findOperator = await prisma.mobile.findUnique({
    where: {
      operator,
    },
  });

  if (!findOperator) {
    const createOperator = await prisma.mobile.create({
      data: {
        operator,
        balance: 0,
      },
    });

    const numAmount = Number(amount);
    const currentUserBalance = currentUserAccount?.balance - numAmount;
    const currenOperatorBalance = createOperator.balance + numAmount;

    const rechargeMobile = await prisma.$transaction([
      prisma.account.update({
        where: {
          id: currentUserAccount.id,
        },
        data: {
          balance: currentUserBalance,
        },
      }),
      prisma.mobile.update({
        where: {
          id: createOperator.id,
        },
        data: {
          balance: currenOperatorBalance,
        },
      }),
    ]);

    if (!rechargeMobile) {
      return NextResponse.json({ message: "Recharge failed", status: 400 });
    }
    return NextResponse.json({
      message: "Recharge succesfully done",
      rechargeMobile,
      status: 200,
    });
  }

  const numAmount = Number(amount);
  const currentUserBalance = currentUserAccount?.balance - numAmount;
  const currenOperatorBalance = findOperator?.balance + numAmount;

  const rechargeMobile = await prisma.$transaction([
    prisma.account.update({
      where: {
        userId: currentUserAccount.userId,
      },
      data: {
        balance: currentUserBalance,
      },
    }),
    prisma.mobile.update({
      where: {
        id: findOperator.id,
      },
      data: {
        balance: currenOperatorBalance,
      },
    }),
  ]);
  if (!rechargeMobile) {
    return NextResponse.json({ message: "Recharge failed", status: 400 });
  }
  return NextResponse.json({
    message: "Recharge succesfully done",
    rechargeMobile,
    status: 200,
  });
};
