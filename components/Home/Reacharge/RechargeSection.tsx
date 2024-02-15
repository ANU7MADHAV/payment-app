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
    <main className="mt-[80px] space-y-5 bg-[#00baf2] p-6">
      <h1 className="pl-6 text-center text-4xl font-bold text-white">
        Recharge & Pay Bills on Paytm.
      </h1>
      <section className="flex h-full flex-col items-center justify-center space-x-4 lg:flex-row">
        <div>
          <ReachargeComponents
            imageUrl={mobilIcon}
            firstHeading="Recharge"
            secondHeading="Prepaid"
            ThirdHeading="Mobile"
            href="/mobile-recharge"
          />
        </div>
        <div>
          <ReachargeComponents
            imageUrl={electriIcon}
            firstHeading="Pay"
            secondHeading="Electricity"
            ThirdHeading="Bills"
            href="/pay-electricity"
          />
        </div>
        <div>
          <ReachargeComponents
            imageUrl={disIcon}
            firstHeading="Reacharge"
            secondHeading="DTH"
            ThirdHeading="Connection"
            href="/dth-recharge"
          />
        </div>
        <div>
          <ReachargeComponents
            imageUrl={gasIcon}
            firstHeading="Book"
            secondHeading="Gas"
            ThirdHeading="Cylinder"
            href="/pay-gas"
          />
        </div>
        <div>
          <ReachargeComponents
            imageUrl={broadBandIcon}
            firstHeading="Pay"
            secondHeading="Broadband&"
            ThirdHeading="Landline"
            href="/pay-broadband"
          />
        </div>
        <div>
          <ReachargeComponents
            imageUrl={bookIcon}
            firstHeading="Pay"
            secondHeading="Education"
            ThirdHeading="Fee"
            href="/pay-education"
          />
        </div>
        <div>
          <ReachargeComponents
            imageUrl={allpaymentIcon}
            firstHeading="All"
            secondHeading="Payment"
            ThirdHeading="Services"
            href="/all-payments"
          />
        </div>
      </section>
    </main>
  );
};

export default RechargeSection;
