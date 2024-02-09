import prisma from "@/utilities/db";
import { getUser } from "@/utilities/getUser";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { institute, amount } = body;

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
  const findEducation = await prisma.education.findUnique({
    where: {
      institute,
    },
  });
  if (!findEducation) {
    const createEducation = await prisma.education.create({
      data: {
        institute,
        balance: 0,
      },
    });
    if (!createEducation) {
      return NextResponse.json({
        message: "New board failed to create",
        status: 400,
      });
    }
    const numAmount = Number(amount);
    const currentUserBalance = currentUserAccount.balance - numAmount;
    const currentEducationBalance = createEducation.balance + numAmount;

    const payBill = await prisma.$transaction([
      prisma.account.update({
        where: {
          userId: currentUserAccount.userId,
        },
        data: {
          balance: currentUserBalance,
        },
      }),
      prisma.education.update({
        where: {
          id: createEducation.id,
        },
        data: {
          balance: currentEducationBalance,
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
  const currentEducationBalance = findEducation.balance + numAmount;

  const payBill = await prisma.$transaction([
    prisma.account.update({
      where: {
        userId: currentUserAccount.userId,
      },
      data: {
        balance: currentUserBalance,
      },
    }),
    prisma.education.update({
      where: {
        id: findEducation.id,
      },
      data: {
        balance: currentEducationBalance,
      },
    }),
  ]);
  if (!payBill) {
    return NextResponse.json({ message: "Transaction failed" });
  }
  return NextResponse.json({
    message: "Transaction updated succesfully",
    status: 200,
  });
};
