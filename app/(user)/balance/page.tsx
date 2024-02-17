import BalanceShow from "@/components/Dashboard/BalanceShow";
import ExitButton from "@/components/ExitButton";
import React from "react";

const BalancePage = () => {
  return (
    <main>
      <section className="flex justify-end px-4 ">
        <ExitButton />
      </section>
      <div className="dark:bg-gray-800">
        <BalanceShow />
      </div>
    </main>
  );
};

export default BalancePage;
