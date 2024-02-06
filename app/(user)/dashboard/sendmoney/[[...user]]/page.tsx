"use client";

import { AlertDialogDemo } from "@/components/Sendmoney/Alert";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SendMoney = () => {
  const searchParams = useSearchParams();
  const toAccount = searchParams.get("user");
  const [sendAmount, setSendAmount] = useState("");
  const router = useRouter();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex min-w-[300px] flex-col space-y-5 rounded-md p-6 shadow-lg dark:shadow-blue-500">
        <h1 className="text-center text-2xl font-bold">Send Money</h1>
        <div>
          <section>
            <h1 className="py-4 text-xl font-bold">Friend's name</h1>
            <p>Amount (in Rs)</p>
          </section>
          <form className="flex flex-col">
            <input
              type="text"
              className="my-4 rounded-sm
               border border-lime-200 px-2 outline-lime-400"
              onChange={(e) => setSendAmount(e.target.value)}
            />
            <AlertDialogDemo sendAmount={sendAmount} toAccount={toAccount!} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
