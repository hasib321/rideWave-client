import { Link } from "react-router-dom";

const OtherServices = ({ otherCard }) => {
  const {
    _id,
    name,
    serviceName,
    price,
    Description,
    serviceArea,
    image,
    serviceProviderImage,
  } = otherCard;
  return (
    <div>
      <Link to={`/allServices`}>
        <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img
              src={image}
              alt=""
              className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="space-y-1">
              <h2 className="text-base font-semibold">{serviceName}</h2>

              <p className="text-sm dark:text-gray-400">Price:{price}$</p>
              <p className="text-sm dark:text-gray-400">Area:{serviceArea}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OtherServices;
