"use client";
import axios from "axios";
import Link from "next/link";
import { ThemeSwitcher } from "./DarkMode";
import User from "./User";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between p-4 shadow-md dark:shadow-blue-400">
      <div className="flex items-center justify-around space-x-14 px-4 ">
        <Link href="/">
          <h1 className="text-4xl font-bold text-blue-600">Payment App</h1>
        </Link>
        <Link href="/dashboard">
          <h1 className="text-lg font-medium">Dashboard</h1>
        </Link>
      </div>
      <div className="flex space-x-8 px-6">
        <ThemeSwitcher />
        <div>
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
