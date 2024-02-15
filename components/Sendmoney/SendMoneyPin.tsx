"use client";

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

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CiBank } from "react-icons/ci";
import { useRecoilValue } from "recoil";
import Pin from "../Pin";
import axios from "axios";
import error from "next/error";
import { useState } from "react";

type Props = {
  sendAmount: string;
  toAccount: string;
};

const SendMoneyPin = ({ sendAmount, toAccount }: Props) => {
  const router = useRouter();
  const pin = useRecoilValue(pinDataSate);
  const [alert, setAlert] = useState(false);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className="text-xl font-bold text-blue-500">
          <CiBank className="text-2xl font-extrabold" />
          Send Money
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
            <Button
              className="bg-green-400 dark:bg-green-600"
              variant="outline"
              onClick={async () => {
                if (sendAmount === "") {
                  return null;
                }
                try {
                  const res = await axios.post("/api/account/transfer", {
                    amount: sendAmount,
                    to: toAccount,
                    pin: pin,
                  });
                  const data = await res.data;
                  const { message, success } = data;
                  if (success) {
                    console.log(success, message);
                    router.push("/dashboard/transaction");
                  }
                } catch (error) {
                  console.log("Error while sending money:", error);
                }
              }}
            >
              Send Money
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SendMoneyPin;
