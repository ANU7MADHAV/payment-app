"use client";

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
import axios from "axios";
import { useEffect, useState } from "react";
import { CiBank } from "react-icons/ci";

const Balance = () => {
  const [balance, setBalance] = useState();
  useEffect(() => {
    const getBalance = async () => {
      try {
        const res = await axios.get("/api/account/balance");
        const data = res.data;
        const { balance } = data;
        setBalance(balance);
      } catch (error) {
        console.log("something wrong", error);
      }
    };
    getBalance();
  }, []);
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
            Your Balance
          </AlertDialogTitle>
          <AlertDialogDescription className="mt-5 flex h-full items-center justify-center text-3xl font-bold text-green-400">
            $ {balance}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Ok</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Balance;
