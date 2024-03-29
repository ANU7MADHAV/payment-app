"use client";

import { friendDataSate } from "@/atoms/friendDataAtom";
import SendMoneyPin from "@/components/Sendmoney/SendMoneyPin";
import FriendDetails from "@/components/Sendmoney/FriendDetails";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import ExitButton from "@/components/ExitButton";

const SendMoney = () => {
  const searchParams = useSearchParams();
  const toAccount = searchParams.get("user");
  const [friendData, setFriendData] = useRecoilState(friendDataSate);
  const [sendAmount, setSendAmount] = useState("");

  useEffect(() => {
    const getToUser = async () => {
      const res = await axios.post("/api/toUser", { id: toAccount });
      const data = await res.data;
      setFriendData(data);
    };
    getToUser();
  }, []);

  return (
    <main>
      <section className="flex justify-end px-4 ">
        <ExitButton />
      </section>
      <div className="flex h-screen items-center justify-center dark:bg-gray-800 dark:text-white">
        <div className="flex min-w-[300px] flex-col space-y-5 rounded-md p-6 shadow-lg dark:shadow-blue-500">
          <h1 className="text-center text-2xl font-bold">Send Money</h1>
          <div>
            <section>
              <div className="py-4">
                <FriendDetails />
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
              <SendMoneyPin sendAmount={sendAmount} toAccount={toAccount!} />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SendMoney;
