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
    <main className=" cursor-pointer rounded-md  px-4 py-3 pr-[30px] hover:bg-black/5">
      <div className=" max-w-[80px]  text-left">
        <Image src={imageUrl} alt="mobileIcon" />
        <div className="flex flex-col justify-start py-2 pl-2 text-left font-bold text-white/90">
          <h3 className="py-1 text-sm font-medium">{firstHeading}</h3>
          <h3 className="text-sm">{secondHeading}</h3>
          <section className="flex ">
            <h3>{ThirdHeading}</h3>
            <Link href={href}>
              <button>
                <IoIosArrowForward />
              </button>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ReachargeComponents;
