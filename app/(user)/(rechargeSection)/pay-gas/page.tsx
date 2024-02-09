"use client";

import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { useState } from "react";

const PayGas = () => {
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [amount, setAmount] = useState("");
  const [provider, setProvider] = useState("");

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col overflow-hidden rounded-md px-8 py-6 shadow-lg dark:shadow-blue-400">
        <h1 className="text-1xl my-6 font-bold">Book LPG Gas Cylinder</h1>
        <div className="flex items-center justify-around space-x-4">
          <section>
            <Checkbox
              disabled={check1}
              className="mx-1 overflow-hidden rounded"
              onClick={() => setCheck(!check)}
            />
            <label htmlFor="select">Pay Gas Bill</label>
          </section>
          <section>
            <Checkbox
              disabled={check}
              className="mx-1 overflow-hidden rounded"
              onClick={() => setCheck1(!check1)}
            />

            <label htmlFor="select">Book a Cylinder</label>
          </section>
        </div>
        <section className="mt-5 flex flex-col space-y-5">
          <input
            onChange={(e) => setProvider(e.target.value)}
            type="text"
            placeholder="Provider"
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
              const res = await axios.post("/api/payment/gas", {
                provider,
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

export default PayGas;
