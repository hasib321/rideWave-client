import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { FaRegFlag } from "react-icons/fa";
const Progress = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-8 bg-[#e2f4ea] py-2 mt-16 rounded-lg pb-16">
      <div>
        <div>
          <div
            className="text-center mt-20 pb-10"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <h1 className="text-[#0b996f] text-5xl font-semibold pb-5">
              Redefining Transportation for a <br /> Connected World
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
        {/* progress bar strt */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 mt-5">
          <div
            className=" group hover:bg-[#0b996f] hover:rounded-xl"
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div className=" rounded-xl border border-gray-300 p-8 space-y-4">
              <span className="bg-white ">
                <AiOutlineCompass className="text-[#0b996f] text-3xl bg-slate-50 rounded-full"></AiOutlineCompass>
              </span>
              <h1 className="text-green-900 text-2xl font-semibold group-hover:text-white">
                Our Vision
              </h1>
              <p className="text-gray-600 text-lg group-hover:text-white">
                To redefine travel by providing seamless and memorable
                experiences, setting new standards in convenience and customer
                satisfaction.
              </p>
            </div>
          </div>

          <div
            className=" hover:bg-[#0b996f] hover:rounded-xl "
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div className=" rounded-xl border group border-gray-300 p-8 space-y-4 ">
              <span className="bg-white ">
                <FaRegFlag className="text-[#0b996f] text-3xl bg-slate-50 rounded-full"></FaRegFlag>
              </span>
              <h1 className="text-green-900 text-2xl font-semibold group-hover:text-white">
                Our Mission
              </h1>
              <p className="text-gray-600 text-lg group-hover:text-white">
                To deliver reliable, efficient, and innovative transportation
                solutions, ensuring every journey with us is not just a ride but
                a journey of joy and ease.
              </p>
            </div>
          </div>
          <div
            className=" space-y-6"
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div>
              <div className="flex justify-between ">
                <h1 className="text-green-900 font-semibold">Safety Ride</h1>
                <h1 className="text-green-900 font-medium">97%</h1>
              </div>
              <progress
                className="progress progress-success w-full "
                value="97"
                max="100"
              ></progress>
            </div>
            <div>
              <div className="flex justify-between">
                <h1 className="text-green-900 font-semibold">
                  Affordable Pricing
                </h1>
                <h1 className="text-green-900 font-medium">90%</h1>
              </div>
              <progress
                className="progress progress-success w-full "
                value="90"
                max="100"
              ></progress>
            </div>
            <div>
              <div className="flex  justify-between">
                <h1 className="text-green-900 font-semibold">
                  Quality Service
                </h1>
                <h1 className="text-green-900 font-medium">92%</h1>
              </div>
              <progress
                className="progress progress-success  w-full"
                value="92"
                max="100"
              ></progress>
            </div>
            <div>
              <div className="flex justify-between">
                <h1 className="text-green-900 font-semibold">
                  Happy Passenger
                </h1>
                <h1 className="text-green-900 font-medium">95%</h1>
              </div>
              <progress
                className="progress progress-success  w-full "
                value="95"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
