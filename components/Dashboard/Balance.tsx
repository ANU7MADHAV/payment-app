"use client";

import { balanceDataSate } from "@/atoms/balanceDataAtom";
import { pinDataSate } from "@/atoms/pinDataAtom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { pinValidation } from "@/utilities/clientValidationSchema";
import axios from "axios";
import { useRouter } from "next/navigation";
import { CiBank } from "react-icons/ci";
import { useRecoilState, useRecoilValue } from "recoil";
import Pin from "../Pin";
import { useState } from "react";

const Balance = () => {
  const router = useRouter();
  const [balance, setBalance] = useRecoilState(balanceDataSate);
  const pin = useRecoilValue(pinDataSate);


  const handleClick = async () => {
    try {
      const response = pinValidation.safeParse(pin);
      if (!response.success) {
        return null;
      }
      const res = await axios.post("/api/account/balance", { pin: pin });
      const data = res.data;
      const { balance, message } = data;
      setBalance(balance);
      if (balance) {
        console.log("balance", balance);
        router.push("/balance");
      }
    } catch (error) {
      console.log("something wrong", error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className="text-xl font-bold text-blue-500">
          <CiBank className="text-2xl font-extrabold" />
          Check Balance
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col justify-center space-x-4 dark:bg-white ">
        <AlertDialogHeader className="flex h-full flex-col items-center space-y-4 ">
          <AlertDialogTitle className="space-y-4 pl-5 text-2xl text-blue-800">
            Enter your pin
          </AlertDialogTitle>
          <AlertDialogDescription className="mt-5 flex h-full items-center justify-center text-3xl font-bold text-green-400">
            <Pin />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>
            <Button onClick={handleClick}>Ok</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Balance;
