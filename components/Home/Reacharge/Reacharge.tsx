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
    <div className="max-w-[90px]">
      <Image src={imageUrl} alt="mobileIcon" />
      <div className="flex flex-col py-2 text-left font-bold text-white/90">
        <h3 className="font-medium">{firstHeading}</h3>
        <h3>{secondHeading}</h3>
        <section className="flex ">
          <h3>{ThirdHeading}</h3>
          <button>
            <IoIosArrowForward />
          </button>
        </section>
      </div>
    </div>
  );
};

export default ReachargeComponents;
