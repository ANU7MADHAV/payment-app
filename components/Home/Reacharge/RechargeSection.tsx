import ReachargeComponents from "./Reacharge";
import mobilIcon from "@/public/mobileIcon.png";
import electriIcon from "@/public/electricityIcon.png";
import disIcon from "@/public/dishIcon.png";
import gasIcon from "@/public/gasIcon.png";
import broadBandIcon from "@/public/broadBand.png";
import bookIcon from "@/public/book.png";
import allpaymentIcon from "@/public/allpayment.png";

const RechargeSection = () => {
  return (
    <main className=" space-y-5 bg-[#00baf2] p-6">
      <h1 className="pl-8 text-3xl font-bold text-white">
        Recharge & Pay Bills on Paytm.
      </h1>
      <section className="flex items-center justify-around space-x-4">
        <div>
          <ReachargeComponents
            imageUrl={mobilIcon}
            firstHeading="Reacharge"
            secondHeading="Prepaid"
            ThirdHeading="Mobile"
          />
        </div>
        <div>
          <ReachargeComponents
            imageUrl={electriIcon}
            firstHeading="Pay"
            secondHeading="Electricity"
            ThirdHeading="Bill"
          />
        </div>
        <div>
          <ReachargeComponents
            imageUrl={disIcon}
            firstHeading="Reacharge"
            secondHeading="DTH"
            ThirdHeading="Connection"
          />
        </div>
        <div>
          <ReachargeComponents
            imageUrl={gasIcon}
            firstHeading="Book"
            secondHeading="Gas"
            ThirdHeading="Cylinder"
          />
        </div>
        <div>
          <ReachargeComponents
            imageUrl={broadBandIcon}
            firstHeading="Pay"
            secondHeading="Broadband&"
            ThirdHeading="Landline"
          />
        </div>
        <div>
          <ReachargeComponents
            imageUrl={bookIcon}
            firstHeading="Pay"
            secondHeading="Education"
            ThirdHeading="Fee"
          />
        </div>
        <div>
          <ReachargeComponents
            imageUrl={allpaymentIcon}
            firstHeading="All"
            secondHeading="Payment"
            ThirdHeading="Services"
          />
        </div>
      </section>
    </main>
  );
};

export default RechargeSection;
