import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";
import Swal from "sweetalert2";

const Bookings = ({ booking, refetch }) => {
  //   console.log(Object.keys(booking).join(","));

  const {
    _id,
    serviceName,
    serviceProviderEmail,
    userEmail,
    price,
    date,
    specialInstruction,
    serviceImage,
  } = booking;

  //Delete service
  const handleDelete = () => {
    axios.delete(`http://localhost:5000/booking/${_id}`).then((res) => {
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
      <div className="bg-[#e2f4ea] p-5">
        <div className="w-full h-60">
          <img className="w-full h-full" src={serviceImage} alt="" />
        </div>
        <div className="">
          <h2 className="text-[#0b996f]  text-2xl font-semibold pb-4">
            {serviceName}
          </h2>
          <h3 className="text-gray-600 "> Service Price: {price}$</h3>
          <h3 className="text-gray-600 "> UserEmail: {userEmail}</h3>
          <h3 className="text-gray-600 "> Booking time :{date}</h3>

          {/* The button to open modal of special instruction */}
          <label
            htmlFor="my_modal_7"
            className="btn bg-[#0b996f] border-none text-white hover:bg-[#0b996f] mt-4"
          >
            See Special Instruction
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <p className="mt-3">
                <span className="text-gray-600  font-bold pb-4">
                  {" "}
                  Special Instruction:
                </span>
                <br />
                {specialInstruction}
              </p>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>

          <button
            onClick={() => handleDelete(_id)}
            className=" btn w-32 bg-red-500 border-none text-white hover:bg-red-600 mt-4 ml-2"
          >
            <span className="flex items-center gap-2">
              Remove <AiFillCloseCircle></AiFillCloseCircle>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
