"use client";

import axios from "axios";
import { useState } from "react";

const PayBroadband = () => {
  const [amount, setAmount] = useState("");
  const [institute, setInstitute] = useState("");

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col overflow-hidden rounded-md px-8 py-6 shadow-lg dark:shadow-blue-400">
        <h1 className="text-1xl my-6 font-bold">Pay Your Fee</h1>
        <section className="mt-5 flex flex-col space-y-5">
          <input
            onChange={(e) => setInstitute(e.target.value)}
            type="text"
            placeholder="Broadband"
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
              const res = await axios.post("/api/payment/broadBand", {
                institute,
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
    </main>
  );
};

export default PayBroadband;
