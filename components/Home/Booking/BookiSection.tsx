import busIcon from "@/public/busIcon.png";
import flightIcon from "@/public/flight.png";
import insuranceIcon from "@/public/insurance.png";
import investIcon from "@/public/invest.webp";
import movieIcon from "@/public/movie.png";
import tourIcon from "@/public/tour.png";
import trainIcon from "@/public/trainIcon.png";
import Booking from "./Booking";

const BookiSection = () => {
  return (
    <main className="bg-[#0f4a8a]">
      <div className="space-y-8 p-6">
        <h1 className="pl-6 text-center text-4xl font-bold text-white">
          Book & Buy on Paytm.
        </h1>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
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
        </div>
      </div>
    </main>
  );
};

export default BookiSection;
