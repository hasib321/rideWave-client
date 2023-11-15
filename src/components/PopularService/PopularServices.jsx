import Aos from "aos";
import "aos/dist/aos.css";
import Loading from "../Loading/Loading";
import useService from "../../CustomHook/UseService/useService";
import Services from "../services/Services";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PopularServices = () => {
  const { data, isLoading } = useService();

  useEffect(() => {
    Aos.init();
  }, []);

  if (isLoading === true) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-8">
      <div
        className="text-center mt-20 pb-10"
        data-aos="slide-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <h1 className="text-[#0b996f] text-5xl font-semibold pb-5">
          Explore Our Popular Services
        </h1>
        <p className="hidden md:block lg:block">
          Discover the most in-demand services tailored to your needs. From city
          adventures <br /> to daily commutes, we've got you covered with our
          top-rated offerings.
        </p>
        <p className="block md:hidden lg:hidden">
          Discover the most in-demand services tailored to your needs. From city
          adventures to daily commutes, we've got you covered with our top-rated
          offerings.
        </p>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10"
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        {data?.slice(0, 4).map((services) => (
          <Services services={services} key={services._id}></Services>
        ))}
      </div>
      <div className="flex justify-center items-center py-8">
        <Link to="/allServices">
          <button className="btn  bg-[#0b996f] border-none text-white hover:bg-[#0b996f]">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularServices;
