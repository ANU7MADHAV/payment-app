import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

type Props = {
  imageUrl: StaticImageData;
  firstHeading: string;
  secondHeading: string;
  ThirdHeading: string;
  href: string;
};

const ReachargeComponents = ({
  imageUrl,
  firstHeading,
  secondHeading,
  ThirdHeading,
  href,
}: Props) => {
  return (
    <main className=" mx-3 cursor-pointer rounded-md  px-4 py-3 pr-[30px] hover:bg-black/5">
      <Link href={href}>
        <div className=" max-w-[80px] text-left  xl:min-w-[110px]">
          <Image src={imageUrl} alt="mobileIcon" />
          <div className="flex flex-col justify-start py-2 pl-2 text-left font-bold text-white/90">
            <h3 className="py-1 text-sm font-medium xl:text-lg">
              {firstHeading}
            </h3>
            <h3 className="text-sm xl:text-lg">{secondHeading}</h3>
            <section className="flex ">
              <h3>{ThirdHeading}</h3>
              <button>
                <IoIosArrowForward />
              </button>
            </section>
          </div>
        </div>
      </Link>
    </main>
  );
};

export default ReachargeComponents;
