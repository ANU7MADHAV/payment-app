"use client";

import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { useState } from "react";

const RechargePage = () => {
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [amount, setAmount] = useState("");
  const [operator, setOperator] = useState("");

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col overflow-hidden rounded-md px-8 py-6 shadow-lg">
        <h1 className="text-1xl my-6 font-bold">Recharge or Pay Mobile Bill</h1>
        <div className="flex items-center justify-around">
          <section>
            <Checkbox
              disabled={check1}
              className="mx-1 overflow-hidden rounded"
              onClick={() => setCheck(!check)}
            />
            <label htmlFor="select">Prepaid</label>
          </section>
          <section>
            <Checkbox
              disabled={check}
              className="mx-1 overflow-hidden rounded"
              onClick={() => setCheck1(!check1)}
            />

            <label htmlFor="select">Postpaid</label>
          </section>
        </div>
        <section className="mt-5 flex flex-col space-y-5">
          <input
            type="text"
            placeholder="Mobile Number"
            className=" border-b outline-none"
          />
          <input
            onChange={(e) => setOperator(e.target.value)}
            type="text"
            placeholder="Operator"
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
              const res = await axios.post("/api/payment/mobile", {
                operator,
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

export default RechargePage;
