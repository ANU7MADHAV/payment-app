"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SheetDemo } from "./Bar";
import { ThemeSwitcher } from "./DarkMode";
import { SonnerDemo } from "./Signout";
import User from "./User";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex w-screen items-center justify-between p-4 shadow-md dark:bg-gray-800 dark:shadow-blue-400">
      <div className="flex w-screen items-center justify-between space-x-14 px-4 ">
        <section className="flex items-center justify-around space-x-10">
          <Link href="/">
            <h1 className="text-lg font-bold text-blue-600 md:text-2xl lg:text-5xl">
              Payment App
            </h1>
          </Link>
          <Link href="/dashboard">
            <h1 className="hidden text-medium font-medium dark:text-white lg:block lg:text-xl ">
              Dashboard
            </h1>
          </Link>
        </section>

        <div className="block dark:bg-gray-800 dark:text-white lg:hidden">
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
        <div className="cursor-pointer pt-1  dark:text-white">
          <SonnerDemo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
