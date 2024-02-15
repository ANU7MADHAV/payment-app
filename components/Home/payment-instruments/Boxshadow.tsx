import instrumentIcon from "@/public/intrumentRemove.png";
import instruMobile from "@/public/intru-mobile.webp";
import Image from "next/image";

const Boxshadow = () => {
  return (
    <main className="flex items-center justify-center px-4 py-3 text-center">
      <div className="w-auto shadow-xl dark:shadow-blue-400 ">
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col ">
            <section className="flex items-center justify-center py-2 ">
              <Image src={instrumentIcon} alt="icon" width={100} />
              <p className="px-2  font-bold">
                Paytm <br />
                Wallet
              </p>
            </section>
            <section className="items-center justify-center">
              <h1 className="text-xl font-bold ">
                The Fastest Way to <br /> Pay In-store & Online.
              </h1>
              <h3 className="py-6 font-medium md:text-sm">
                Load up your Paytm Wallet for free and make payments in a jiffy
                at over 21 million stores, <br /> websites and apps.
              </h3>
            </section>
          </div>
          <div>
            <Image src={instruMobile} alt="icon" width={500} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Boxshadow;
