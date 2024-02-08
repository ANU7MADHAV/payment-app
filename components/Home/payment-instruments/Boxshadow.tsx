import instrumentIcon from "@/public/intrumentRemove.png";
import instruMobile from "@/public/intru-mobile.webp";
import Image from "next/image";

const Boxshadow = () => {
  return (
    <main className="flex items-center justify-center">
      <div className=" mx-[100px] mt-[100px] h-[500px] w-auto shadow-xl dark:shadow-blue-400 ">
        <div className="flex h-full justify-between">
          <div className="flex flex-col  pl-[60px] pt-[50px]">
            <section className="flex items-center">
              <Image src={instrumentIcon} alt="icon" width={100} />
              <p className="px-2 text-large font-bold">
                Paytm <br />
                Wallet
              </p>
            </section>
            <section className="pt-[100px]">
              <h1 className="text-3xl font-bold">
                The Fastest Way to <br /> Pay In-store & Online.
              </h1>
              <h3 className="py-6 font-medium">
                Load up your Paytm Wallet for free and make payments <br /> in a
                jiffy at over 21 million stores, websites and apps.
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
