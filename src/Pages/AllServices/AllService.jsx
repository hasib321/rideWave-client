import { Link } from "react-router-dom";

const AllService = ({ allService }) => {
  const {
    _id,
    name,
    serviceName,
    price,
    Description,
    serviceArea,
    image,
    serviceProviderImage,
  } = allService || {};

  return (
    <div>
      <div className="bg-[#e2f4ea] hover:bg-white hover:border transition ease-in-out delay-150 shadow-md  rounded p-5 flex items-center gap-10 flex-col  lg:flex-row">
        <div>
          <img
            className="w-full  lg:w-[36rem] h-72 rounded"
            src={image}
            alt=""
          />
        </div>
        <div className="">
          <h2 className="text-[#0b996f]  text-2xl font-semibold pb-4">
            {serviceName}
          </h2>
          <h3 className="text-gray-600 flex items-center">
            {" "}
            Service Price: {price}$
          </h3>
          <h3 className="text-gray-600 flex items-center">
            {" "}
            Service Area :{serviceArea}
          </h3>
          <p className="mt-3">{Description.slice(0, 90)}...</p>

          <Link to={`/allServices/${_id}`}>
            <button className="btn w-32 bg-[#0b996f] border-none text-white hover:bg-[#0b996f] mt-4">
              view Details
            </button>
          </Link>

          <div className="flex items-center gap-5 mt-6">
            <img
              alt=""
              className="w-10 h-10 rounded-full ri ri dark:bg-gray-500 ri ri"
              src={serviceProviderImage}
            />
            <h2 className="text-green-900">{name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllService;
