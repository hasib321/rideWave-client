import { RxUpdate } from "react-icons/rx";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Manageservice = ({ manageService, refetch }) => {
  const {
    _id,
    name,
    serviceName,
    price,
    Description,
    serviceArea,
    image,
    serviceProviderImage,
  } = manageService || {};

  //Delete service
  const handleDelete = () => {
    axios
      .delete(`https://ridewave-server.vercel.app/service/${_id}`)
      .then((res) => {
        if (res?.data?.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure you want to delete?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Deleted", "Your service has been deleted", "success");
              refetch();
            } else if (result.isDenied) {
              Swal.fire("No Changes", "", "info");
            }
          });
        }
      });
  };
  return (
    <div>
      <div className=" dark:text-green-900 my-5 rounded">
        <div className="container grid grid-cols-12 mx-auto bg-gray-300">
          <div className="bg-no-repeat bg-cover h-72 bg-gray-300 col-span-full lg:col-span-5">
            <img className="w-full h-full p-5 " src={image} alt="" />
          </div>
          <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-7 lg:p-10">
            <h1 className="text-3xl font-semibold">{serviceName}</h1>
            <p className="flex-1 pt-2">price: {price}$</p>
            <p className="flex-1 pt-2">Service Area:{serviceArea}</p>
            <Link
              to={`/allServices/${_id}`}
              rel="noopener noreferrer"
              href="#"
              className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-400"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <div className="flex  gap-3">
              <Link to={`/manageServices/${_id}`}>
                <button className=" btn w-32 bg-[#0b996f] border-none text-white hover:bg-[#0b996f] mt-4">
                  <span className="flex items-center gap-2">
                    Edit <RxUpdate></RxUpdate>
                  </span>
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className=" btn w-32 bg-red-500 border-none text-white hover:bg-red-600 mt-4"
              >
                <span className="flex items-center gap-2">
                  Delete <AiFillCloseCircle></AiFillCloseCircle>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manageservice;
