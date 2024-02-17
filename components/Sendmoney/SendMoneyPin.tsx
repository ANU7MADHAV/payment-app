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

import { Button } from "@/components/ui/button";
import { Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiBank } from "react-icons/ci";
import { useRecoilValue } from "recoil";
import Pin from "../Pin";

type Props = {
  sendAmount: string;
  toAccount: string;
};

const SendMoneyPin = ({ sendAmount, toAccount }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pin = useRecoilValue(pinDataSate);
  const [alert, setAlert] = useState(false);
  if (loading) {
    return (
      <div className="items-center justify-center text-2xl">
        <Spinner />
      </div>
    );
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="bg-blue-400 text-xl font-bold text-white"
        >
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
                setLoading(true);
                try {
                  const res = await axios.post("/api/account/transfer", {
                    amount: sendAmount,
                    to: toAccount,
                    pin: pin,
                  });
                  const data = await res.data;
                  const { message, success } = data;
                  setLoading(false);
                  if (success) {
                    console.log(success, message);
                    router.push("/dashboard/message");
                  }
                } catch (error) {
                  console.log("Error while sending money:", error);
                  setLoading(false);
                }
              }}
            >
              Send Money{" "}
              {/* {loading ? (
                <span>
                  <Spinner />
                </span>
              ) : (
                ""
              )} */}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SendMoneyPin;
