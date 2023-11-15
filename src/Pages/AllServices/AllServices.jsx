import { useEffect, useState } from "react";
import useService from "../../CustomHook/UseService/useService";
import Loading from "../../components/Loading/Loading";
import AllService from "./AllService";
import { Helmet } from "react-helmet-async";

const AllServices = () => {
  const { data, isLoading } = useService();
  const [cards, setCards] = useState(data);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setCards(data);
  }, [data]);

  if (isLoading === true) {
    return <Loading></Loading>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value.toUpperCase();
    if (searchText) {
      const filteredCard = data.filter(
        (card) => card.serviceName.toUpperCase() === searchText
      );
      setCards(filteredCard);
    } else {
      setCards([]);
    }
  };

  const divStyle = {
    backgroundImage: "url('/public/servicebanner.jpg')",
    backgroundPosition: "center center",
    backgroundBlendMode: "multiply",
    backgroundSize: "cover",
  };

  return (
    <div className="max-w-screen-xl mx-auto px-8">
      {/* site naming */}
      <Helmet>
        <title>RideWave | Services</title>
      </Helmet>
      {/* search functionality */}

      <div className="w-full dark:bg-gray-500" style={divStyle}>
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leadi text-center dark:text-gray-100">
            Get Our Services
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">
            Find Your Perfect Service
          </p>
          <div className="flex justify-center items-center pt-5">
            <form className="flex" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="input-group">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search services"
                    className="input input-bordered"
                  />
                  <button
                    type="submit"
                    value="Submit"
                    className="bg-[#0b996f] py-1 px-3 text-white font-semibold rounded-md cursor-pointer"
                  >
                    search
                  </button>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* services */}
      <div>
        <div className="py-12 space-y-10">
          {isShow
            ? cards?.map((allService) => (
                <AllService
                  allService={allService}
                  key={allService._id}
                ></AllService>
              ))
            : cards
                ?.slice(0, 4)
                .map((allService) => (
                  <AllService
                    allService={allService}
                    key={allService._id}
                  ></AllService>
                ))}
        </div>
        <div className="mb-5">
          {data.length > 4 && !isShow && (
            <div className="flex items-center justify-center mt-5">
              <button
                className="btn w-32 bg-[#0b996f] border-none text-white hover:bg-[#0b996f] "
                onClick={() => setIsShow(true)}
              >
                See More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
