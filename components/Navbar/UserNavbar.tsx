"use client";
import axios from "axios";
import Link from "next/link";
import { ThemeSwitcher } from "./DarkMode";
import User from "./User";
import { useRouter } from "next/navigation";
import { SheetDemo } from "./Bar";
import { SonnerDemo } from "./Signout";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex w-screen items-center justify-between p-4 shadow-md dark:shadow-blue-400">
      <div className="flex w-screen items-center justify-between space-x-14 px-4 ">
        <section className="flex items-center justify-around space-x-10">
          <Link href="/">
            <h1 className="text-lg font-bold text-blue-600 md:text-2xl lg:text-5xl">
              Payment App
            </h1>
          </Link>
          <Link href="/dashboard">
            <h1 className="hidden text-medium font-medium lg:block lg:text-xl ">
              Dashboard
            </h1>
          </Link>
        </section>

        <div className="block dark:bg-black dark:text-white lg:hidden">
          <ThemeSwitcher />
        </div>
      </div>
      <div className="block lg:hidden">
        <SheetDemo />
      </div>
      <div className="hidden items-center px-8  md:space-x-8 lg:flex">
        <ThemeSwitcher />
        <div className="hidden lg:flex">
          <User />
        </div>
        <div className="cursor-pointer  pt-1">
          <SonnerDemo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
