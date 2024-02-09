"use client";

import axios from "axios";
import { useState } from "react";

const PayDth = () => {
  const [amount, setAmount] = useState("");
  const [dth, setDth] = useState("");

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col overflow-hidden rounded-md px-8 py-6 shadow-lg dark:shadow-blue-400">
        <h1 className="text-1xl my-6 font-bold">Recharge DTH or TV</h1>
        <section className="mt-5 flex flex-col space-y-5">
          <input
            onChange={(e) => setDth(e.target.value)}
            type="text"
            placeholder="dth"
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
              const res = await axios.post("/api/payment/dth-recharge", {
                dth,
                amount,
              });
              const data = await res.data;
              console.log(data);
            }}
          >
            Procced to Recharge
          </button>
        </section>
      </div>
    </main>
  );
};

export default PayDth;
