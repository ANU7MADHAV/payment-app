import Image, { StaticImageData } from "next/image";
import { IoIosArrowForward } from "react-icons/io";

type Props = {
  imageUrl: StaticImageData;
  firstHeading: string;
  secondHeading: string;
  ThirdHeading: string;
};

const ReachargeComponents = ({
  imageUrl,
  firstHeading,
  secondHeading,
  ThirdHeading,
}: Props) => {
  return (
    <main className="cursor-pointer rounded-md px-6 py-3 hover:bg-black/5">
      <div className="max-w-[90px]">
        <Image src={imageUrl} alt="mobileIcon" />
        <div className="flex flex-col py-2 pl-2 text-left font-bold text-white/90">
          <h3 className="py-1 font-medium">{firstHeading}</h3>
          <h3>{secondHeading}</h3>
          <section className="flex ">
            <h3>{ThirdHeading}</h3>
            <button>
              <IoIosArrowForward />
            </button>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ReachargeComponents;
