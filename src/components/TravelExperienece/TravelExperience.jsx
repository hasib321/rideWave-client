import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
const TravelExperience = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-8 py-16">
      <div className="flex flex-col md:flex-col lg:flex-row gap-10 items-center">
        <div className="flex-1">
          <h1
            className="text-[#0b996f] text-4xl font-semibold pb-5"
            data-aos="slide-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            Explore Our Popular Services
          </h1>
          <p
            className="text-gray-600"
            data-aos="slide-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            Embark on a seamless and stress-free travel experience with our
            dedicated services. From efficient booking processes to comfortable
            rides, we prioritize making your journey as easy as possible. Sit
            back, relax, and let us handle the details, ensuring every step of
            your travel is a smooth and enjoyable experience.
          </p>

          <div
            className="flex items-center gap-8 mt-8"
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <ul className="space-y-5">
              <li className="flex items-center justify-center gap-2 text-gray-600">
                <BsFillCheckCircleFill className="text-green-600"></BsFillCheckCircleFill>{" "}
                Easy-to-use mobile app
              </li>
              <li className="flex items-center justify-center  gap-2 text-gray-600">
                <BsFillCheckCircleFill className="text-green-600"></BsFillCheckCircleFill>{" "}
                Easy-to-use mobile app
              </li>
            </ul>
            <ul className="space-y-5">
              <li className="flex items-center justify-center  gap-2 text-gray-600">
                <BsFillCheckCircleFill className="text-green-600"></BsFillCheckCircleFill>{" "}
                Easy-to-use mobile app
              </li>
              <li className="flex items-center justify-center  gap-2 text-gray-600">
                <BsFillCheckCircleFill className="text-green-600"></BsFillCheckCircleFill>{" "}
                Easy-to-use mobile app
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <div
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <img src="travel.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelExperience;
