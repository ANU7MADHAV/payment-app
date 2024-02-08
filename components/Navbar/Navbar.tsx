"use client";
import { ThemeSwitcher } from "./DarkMode";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 shadow-md">
      <h1 className="text-2xl font-bold ">Payment App</h1>
      <section className="px-4">
        <ThemeSwitcher />
      </section>
    </div>
  );
};

export default Navbar;
