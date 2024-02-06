"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";

type Props = {
  sendAmount: string;
  toAccount: string;
};

export function AlertDialogDemo({ sendAmount, toAccount }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="bg-green-400 dark:bg-green-600"
          variant="outline"
          onClick={async () => {
            if (sendAmount === "") {
              return null;
            }
            try {
              await axios.post("/api/account/transfer", {
                amount: sendAmount,
                to: toAccount,
              });
            } catch (error) {
              console.log("Error while sending money:", error);
            }
          }}
        >
          Send Money
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to send this amount? This action cannot be
            undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Link href="/dashboard">
            <AlertDialogAction>Continue</AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
