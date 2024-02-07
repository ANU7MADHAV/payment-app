import { IoIosArrowForward } from "react-icons/io";
import Image, { StaticImageData } from "next/image";

type Props = {
  imageUrl: StaticImageData;
  firstHeading: string;
  secondHeading: string;
};

const Booking = ({ imageUrl, firstHeading, secondHeading }: Props) => {
  return (
    <div className="overflow-hidden rounded-md px-6 py-3 text-left hover:bg-black/5">
      <Image src={imageUrl} alt="icons" width={80} />
      <div className="py-3 pl-2">
        <h1 className="text-lg font-bold text-white">{firstHeading}</h1>
        <section className="flex items-center ">
          <h1 className="text-lg font-bold text-white">{secondHeading}</h1>
          <button className="text-white">
            <IoIosArrowForward />
          </button>
        </section>
      </div>
    </div>
  );
};

export default Booking;
