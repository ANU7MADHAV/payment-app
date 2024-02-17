import ExitButton from "@/components/ExitButton";
import AlertSend from "@/components/Sendmoney/Alert";

const page = () => {
  return (
    <main>
      <section className="flex justify-end px-4 ">
        <ExitButton />
      </section>
      <div className="dark:bg-gray-800">
        <AlertSend />
      </div>
    </main>
  );
};

export default page;
