"use client";
import { balanceDataSate } from "@/atoms/balanceDataAtom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useRecoilValue } from "recoil";

const BalanceShow = () => {
  const balance = useRecoilValue(balanceDataSate);
  return (
    <Alert className="flex h-screen items-center justify-center">
      <div className=" flex flex-col space-y-8 rounded-md px-8 py-6  shadow-lg dark:shadow-blue-500 md:px-[50px] md:py-[40px]">
        <AlertTitle className="text-4xl font-bold">
          {balance ? "Your Balance" : "Balance is not found"}
        </AlertTitle>
        <AlertDescription className="text-center text-3xl font-medium text-green-500">
          {balance ? `$ ${balance} ` : ""}
        </AlertDescription>
      </div>
    </Alert>
  );
};

export default BalanceShow;
