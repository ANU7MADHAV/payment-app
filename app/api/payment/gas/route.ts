import { getUser } from "@/utilities/getUser";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utilities/db";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { provider, amount } = body;

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
  const findGas = await prisma.gas.findUnique({
    where: {
      provider,
    },
  });
  if (!findGas) {
    const createGas = await prisma.gas.create({
      data: {
        provider,
        balance: 0,
      },
    });
    if (!createGas) {
      return NextResponse.json({
        message: "New board failed to create",
        status: 400,
      });
    }
    const numAmount = Number(amount);
    const currentUserBalance = currentUserAccount.balance - numAmount;
    const currenGasBalance = createGas.balance + numAmount;

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
          id: createGas.id,
        },
        data: {
          balance: currenGasBalance,
        },
      }),
    ]);
    return NextResponse.json({
      message: "Transaction updated succesfully",
      status: 200,
    });
  }
  const numAmount = Number(amount);
  const currentUserBalance = currentUserAccount.balance - numAmount;
  const currenGasBalance = findGas.balance + numAmount;

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
        id: findGas.id,
      },
      data: {
        balance: currenGasBalance,
      },
    }),
  ]);
  return NextResponse.json({
    message: "Transaction updated succesfully",
    status: 200,
  });
};
