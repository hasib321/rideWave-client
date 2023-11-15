import Aos from "aos";
import "aos/dist/aos.css";
import bannerPhone from "../../images/bannerPhone.png";
import { GoDotFill } from "react-icons/go";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useEffect } from "react";
const Banner = () => {
  const [typWriter] = useTypewriter({
    words: [
      "Securely and Inexpensively",
      "Safely and Affordably",
      "Soundly and Cost-Effectively",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-[url('/public/banner.jpg')] bg-cover bg-center min-h-screen">
      <div className="min-w-full bg-[#00000080]  min-h-screen">
        <div className="max-w-screen-xl mx-auto px-8 py-16">
          <div className="flex flex-col md:flex-col lg:flex-row items-center gap-20">
            <div className="w-96 lg:w-[52rem] h-auto order-2 md:order-2 lg:order-1">
              <img
                className="w-full h-full"
                data-aos="slide-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                src={bannerPhone}
                alt=""
              />
            </div>
            <div className="space-y-8 order-1 md:order-1 lg:order-2">
              <h2 className="flex items-center w-48 bg-white p-3 text-sm text-gray-700 font-medium rounded-full">
                <GoDotFill className="text-[#319a64]"></GoDotFill>
                The Perfect Ride Awaits
              </h2>

              <h1 className="text-5xl font-semibold text-white ">
                Get Where You Need to Go,
                <br />
                <span>{typWriter}</span>
                <Cursor />
              </h1>
              <p className="text-white">
                Welcome to Ridewave, your go-to destination for hassle-free
                carpooling and ride-sharing.Whether you're commuting to work,
                planning a weekend getaway, or seeking eco-friendly
                transportation options, we've got you covered.
              </p>
              <button className="btn bg-[#0b996f] border-none text-white hover:bg-[#0b996f]">
                Book Your Ride
              </button>
              <button
                type="button"
                className="btn border bg-[#fff0] text-white hover:bg-[#0b996f] hover:border-none ml-3"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
