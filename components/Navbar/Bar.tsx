"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import { ThemeSwitcher } from "./DarkMode";
import User from "./User";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export function SheetDemo() {
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className=" dark:text-white">
          <FaBars />
        </Button>
      </SheetTrigger>
      <SheetContent className="dark:text-white">
        <SheetHeader></SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4  rounded-md border-b px-6 py-2 dark:text-white ">
            <User />
          </div>
          <div>
            <Link href="/dashboard">
              <h1 className=" items-center gap-4  rounded-md border-b px-6 py-2 dark:text-white ">
                Dashboard
              </h1>
            </Link>
          </div>
          <div
            className="items-center gap-4 rounded-md border-b px-6 py-2 font-medium dark:text-white"
            onClick={async () => {
              const res = await axios.get("/api/signout");
              const data = await res.data;
              console.log(data);
              router.refresh();
            }}
          >
            Signout
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
