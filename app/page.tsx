import UserNavbar from "@/components/Navbar/UserNavbar";
import Image from "next/image";
import paytm from "@/public/paytm.png";
import paytmIcon from "@/public/paytm-icon.jpg";
import RechargeSection from "@/components/Home/Reacharge/RechargeSection";

const Home = () => {
  return (
    <main>
      <nav>
        <UserNavbar />
      </nav>
      <div>
        <div className="mt-[50px] flex justify-between space-x-4 px-4 ">
          <div className="space-y-4 px-4 text-left">
            <Image src={paytm} alt="paytm" width={300} />
            <h1 className="text-5xl font-bold">
              India's Most-loved Payments App
            </h1>
            <p>
              Recharge & pay bills, book flights & movie tickets, open a savings
              account, invest in stocks & mutual funds, and do a lot more.
            </p>
          </div>
          <Image
            src={paytmIcon}
            alt="paytm icon"
            width={800}
            className="overflow-hidden rounded-md  object-cover"
          />
        </div>
        <div>
          <RechargeSection />
        </div>
      </div>
    </main>
  );
};

export default Home;
