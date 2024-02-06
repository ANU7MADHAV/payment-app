"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Balance = () => {
  const [balance, setBalance] = useState();
  useEffect(() => {
    const getBalance = async () => {
      try {
        const res = await axios.get(
          "/api/account/balance",
        );
        const data = res.data;
        const { balance } = data;
        setBalance(balance);
      } catch (error) {
        console.log("something wrong", error);
      }
    };
    getBalance();
  }, []);
  return <h1 className="text-xl font-bold">User balanace $ {balance}</h1>;
};

export default Balance;
