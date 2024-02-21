import Link from "next/link";
import { RxExit } from "react-icons/rx";

const ExitButton = () => {
  return (
    <div>
      <Link href="/">
        <button className="text-xl text-red-500">
          <RxExit />
        </button>
      </Link>
    </div>
  );
};

export default ExitButton;
