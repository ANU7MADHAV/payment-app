"use client";

import { AlertDialogDemo } from "@/components/Sendmoney/Alert";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type ToUser = {
  message: string;
  firstName: string;
  username: string;
};

const SendMoney = () => {
  const searchParams = useSearchParams();
  const toAccount = searchParams.get("user");
  const [toUser, setToUser] = useState<ToUser>();
  const [sendAmount, setSendAmount] = useState("");

  useEffect(() => {
    const getToUser = async () => {
      const res = await axios.post("/api/toUser", { id: toAccount });
      const data = await res.data;
      setToUser(data);
    };
    getToUser();
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex min-w-[300px] flex-col space-y-5 rounded-md p-6 shadow-lg dark:shadow-blue-500">
        <h1 className="text-center text-2xl font-bold">Send Money</h1>
        <div>
          <section>
            <div className="py-4">
              <h1 className="text-xl font-bold">
                {toUser
                  ? toUser.firstName.toLocaleUpperCase()
                  : "Friend's Name"}
              </h1>
              <p>{toUser ? toUser.username : "Friend's Username"}</p>
            </div>
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
