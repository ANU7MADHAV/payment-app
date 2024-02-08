import { getUser } from "@/utilities/getUser";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // const user = getUser(req);
  // if (!user) {
  //   console.log("No user");
  //   return NextResponse.json({ message: "No user details" });
  // }

  // const userId = (user as { userId: string }).userId;

  // const offlineUser = await prisma?.user.update({
  //   where: {
  //     id: userId,
  //   },
  //   data: {
  //     online: false,
  //   },
  // });

  // if (!offlineUser) {
  //   return NextResponse.json({
  //     message: "failed updated user offline",
  //     status: 400,
  //   });
  // }
  cookies().delete("token");

  return NextResponse.json({
    message: "Cookies deleted succesfully",
    status: 200,
  });
}
