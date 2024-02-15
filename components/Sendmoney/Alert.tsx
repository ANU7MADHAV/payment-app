"use client";
import { useRouter } from "next/navigation";
import { Alert, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";

export default function AlertSend() {
  const router = useRouter();
  return (
    <main className="flex h-screen  items-center justify-center text-left">
      <Alert className="max-w-[400px] space-y-5">
        <AlertTitle className="text-center text-2xl font-bold text-blue-500">
          Transaction was successful!
        </AlertTitle>
        <Button onClick={() => router.push("/")} className="w-full text-right">
          Ok
        </Button>
      </Alert>
    </main>
  );
}
