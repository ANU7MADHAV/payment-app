"use client";
import axios from "axios";
import Link from "next/link";
import { ThemeSwitcher } from "./DarkMode";
import User from "./User";
import { useRouter } from "next/navigation";
import { SheetDemo } from "./Bar";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex w-screen items-center justify-between p-4 shadow-md dark:shadow-blue-400">
      <div className="flex w-screen items-center justify-around space-x-14 px-4 ">
        <Link href="/">
          <h1 className="text-lg font-bold text-blue-600">Payment App</h1>
        </Link>
        <Link href="/dashboard">
          <h1 className="hidden text-medium font-medium md:block">Dashboard</h1>
        </Link>
        <div className="block dark:bg-black dark:text-white md:hidden">
          <ThemeSwitcher />
        </div>
      </div>
      <div className="block md:hidden">
        <SheetDemo />
      </div>
      <div className="hidden md:block">
        <ThemeSwitcher />
        <div className="hidden md:block">
          <User />
        </div>
        <div
          onClick={async () => {
            const res = await axios.get("/api/signout");
            const data = await res.data;
            console.log(data);
            router.refresh();
          }}
          className="cursor-pointer pt-1"
        >
          Sign out
        </div>
      </div>
    </div>
  );
};

export default Navbar;
