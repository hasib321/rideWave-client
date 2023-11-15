import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const CustomerReview = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-8 mt-24">
      <div className="flex gap-5 flex-col md:flex-col lg:flex-row justify-between items-center">
        <div className="flex-1">
          <h1
            className="text-[#0b996f] text-5xl font-semibold py-7"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            Stringent Safety Measures <br /> for Peace of Mind
          </h1>
          <p
            className="text-gray-600 pb-5"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            Have queries about our services? Find clarity and valuable
            information in our FAQ section, designed to provide you with a
            seamless experience.
          </p>

          <div className="grid grid-cols-2  gap-8">
            <div
              className=" rounded-xl space-y-4 "
              data-aos="slide-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <h1 className="text-green-900 text-2xl font-semibold ">
                97<span className="text-[#0b996f]">%</span>
              </h1>
              <div>
                <p className="text-gray-600 text-lg ">Satisfaction Rate</p>
              </div>
            </div>
            <div
              className=" rounded-xl space-y-4 "
              data-aos="slide-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <h1 className="text-green-900 text-2xl font-semibold ">
                24<span className="text-[#0b996f]">+</span>
              </h1>
              <div>
                <p className="text-gray-600 text-lg ">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div
              data-aos="flip-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <img
                className="w-full rounded-xl"
                src="../../../public/customerService.jpg"
                alt=""
              />
            </div>
            <div
              data-aos="flip-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <img
                className="w-full rounded-xl"
                src="../../../public/customerService2.jpg"
                alt=""
              />
            </div>
          </div>
          {/* slider */}
          <div className="bg-[#e2f4ea] p-4 rounded-xl mt-5">
            <p
              className="text-sm italic"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              Quick booking, punctual drivers, and comfortable rides. I'm
              impressed with the overall service. Highly recommended -Steven
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
