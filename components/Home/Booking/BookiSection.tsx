import Booking from "./Booking";
import movieIcon from "@/public/movie.png";
import flightIcon from "@/public/flight.png";
import busIcon from "@/public/busIcon.png";
import trainIcon from "@/public/trainIcon.png";
import insuranceIcon from "@/public/insurance.png";
import tourIcon from "@/public/tour.png";
import investIcon from "@/public/invest.webp";

const BookiSection = () => {
  return (
    <main className="bg-[#0f4a8a]">
      <div className="space-y-8 p-6">
        <h1 className="pl-6 text-center text-4xl font-bold text-white">
          Book & Buy on Paytm.
        </h1>
        <section className="flex flex-col  items-center justify-center">
          <div>
            <Booking
              imageUrl={movieIcon}
              firstHeading="Movie"
              secondHeading="Tickets"
            />
          </div>
          <div>
            <Booking
              imageUrl={flightIcon}
              firstHeading="Flight"
              secondHeading="Tickets"
            />
          </div>
          <div>
            <Booking
              imageUrl={busIcon}
              firstHeading="Bus"
              secondHeading="Tickets"
            />
          </div>
          <div>
            <Booking
              imageUrl={trainIcon}
              firstHeading="Train"
              secondHeading="Tickets"
            />
          </div>
          <div>
            <Booking
              imageUrl={insuranceIcon}
              firstHeading="Buy"
              secondHeading="Insurance"
            />
          </div>
          <div>
            <Booking
              imageUrl={tourIcon}
              firstHeading="International"
              secondHeading="Flights"
            />
          </div>
          <div>
            <Booking
              imageUrl={investIcon}
              firstHeading="Invest"
              secondHeading="in Stocks"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default BookiSection;
