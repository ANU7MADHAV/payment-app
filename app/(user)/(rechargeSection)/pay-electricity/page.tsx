"use client";

import ExitButton from "@/components/ExitButton";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { useState } from "react";

const PayElectricity = () => {
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [amount, setAmount] = useState("");
  const [board, setBoard] = useState("");

  return (
    <main>
      <section className="flex justify-end px-4 ">
        <ExitButton />
      </section>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col overflow-hidden rounded-md px-8 py-6 shadow-lg dark:shadow-blue-400">
          <h1 className="text-1xl my-6 font-bold">Pay Electricity Bill</h1>
          <section className="mt-5 flex flex-col space-y-5">
            <input
              onChange={(e) => setBoard(e.target.value)}
              type="text"
              placeholder="Board"
              className=" border-b outline-none"
            />
            <input
              onChange={(e) => setAmount(e.target.value)}
              type="text"
              placeholder="Amount"
              className="border-b outline-none"
            />
            <button
              type="submit"
              className="rounded-md bg-[#00baf2] px-4 py-2 text-white"
              onClick={async () => {
                const res = await axios.post("/api/payment/electricity", {
                  board,
                  amount,
                });
                const data = await res.data;
                console.log(data);
              }}
            >
              Procced
            </button>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PayElectricity;
