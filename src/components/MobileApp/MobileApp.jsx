import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const MobileApp = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-[url('/public/mobileAppBg.png')] bg-cover bg-center min-h-screen max-w-screen-xl mx-auto px-8 pb-16">
      <div>
        <div>
          <div
            className="text-center  mt-20 pb-10"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            {/* book ride */}
            <h1 className="text-[#02c173] text-5xl font-semibold pb-5">
              Simple Steps to Book Your Ride
            </h1>
            <p className="hidden md:block lg:block">
              Unlock the simplicity of booking your ride with just a few easy
              steps. Navigate our <br /> user-friendly platform effortlessly,
              choose your destination, select your preferred service, <br /> and
              finalize your reservation—all in a matter of minutes.
            </p>

            <p className="block md:hidden lg:hidden">
              Unlock the simplicity of booking your ride with just a few easy
              steps. Navigate our user-friendly platform effortlessly, choose
              your destination, select your preferred service, and finalize your
              reservation—all in a matter of minutes.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row gap-16 items-center justify-center mt-5">
          <div
            className="space-y-10 flex-1"
            data-aos="slide-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div className="space-y-2">
              <h1 className="text-[#02c173] text-2xl font-bold">
                1. Type Your Destination
              </h1>
              <p className="text-gray-600">
                Effortlessly input your desired endpoint, ensuring a seamless
                start to your journey.
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="text-[#02c173] text-2xl font-bold">
                2. Confirm Pick-up Location:
              </h1>
              <p className="text-gray-600">
                Verify your pick-up details for precision and peace of mind.
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="text-[#02c173] text-2xl font-bold">
                3. Choose Payment Method
              </h1>
              <p className="text-gray-600">
                Tailor your payment preferences with our flexible options.
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="text-[#02c173] text-2xl font-bold">
                4. Driver On The Way To Pick-up
              </h1>
              <p className="text-gray-600">
                Relax and anticipate your journey as your assigned driver heads
                your way.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div
              className="w-80 h-[40rem]"
              data-aos="slide-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <img className="w-full h-full" src="mobileApp.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
