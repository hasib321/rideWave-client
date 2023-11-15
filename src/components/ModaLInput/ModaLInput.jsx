import { useContext } from "react";
import { AuthContext } from "../../Pages/Auth/AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const ModaLInput = ({ services }) => {
  const { _id, name, email, serviceName, price, image } = services;

  const { user } = useContext(AuthContext);

  const handleBook = (event) => {
    event.preventDefault();

    const form = event.target;
    const serviceName = form.serviceName.value;
    const serviceProviderEmail = form.serviceProviderEmail.value;
    const userEmail = form.userEmail.value;
    const price = form.price.value;
    const date = form.date.value;
    const specialInstruction = form.specialInstruction.value;
    const serviceImage = form.serviceImage.value;

    const bookingService = {
      serviceName,
      serviceProviderEmail,
      userEmail,
      price,
      date,
      specialInstruction,
      serviceImage,
      serviceStatus: "Pending",
    };

    // send data to the server
    axios
      .post("https://ridewave-server.vercel.app/booking", bookingService)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire("Yahooo!", "Booking Added Successfully", "success");
          form.reset();
        }
      });
  };
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-8">
        <div>
          <h2 className="text-3xl font-extrabold text-center my-5 text-[#0b996f]">
            Book Product
          </h2>
          <form onSubmit={handleBook}>
            {/* form name */}
            <div className="md:flex gap-5 mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-green-900 font-semibold ">
                    {" "}
                    Service Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="serviceName"
                    defaultValue={serviceName}
                    placeholder="Service Name"
                    readOnly
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ">
                <label className="label">
                  <span className="label-text text-green-900 font-semibold ">
                    Service Provider Email
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    name="serviceProviderEmail"
                    defaultValue={email}
                    placeholder="Service Email Address"
                    readOnly
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            <div className="md:flex  gap-5 mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-green-900 font-semibold ">
                    User Email
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    name="userEmail"
                    placeholder="User Email"
                    defaultValue={user?.email}
                    readOnly
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ">
                <label className="label">
                  <span className="label-text text-green-900 font-semibold ">
                    Price
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    defaultValue={price}
                    placeholder="Price"
                    readOnly
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form category and details row */}
            <div className="mb-8">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-green-900 font-semibold ">
                    Service Taking Date
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control  ">
                <label className="label">
                  <span className="label-text text-green-900 font-semibold ">
                    Special Instruction
                  </span>
                </label>

                <label className="input-group">
                  <textarea
                    name="specialInstruction"
                    id=""
                    cols="50"
                    rows="5"
                    defaultValue={
                      "If you have specific preferences or requirements for a customized service plan, please provide details here. Let us know the features, options, or any particular elements you would like to include in your personalized service. Your input helps us tailor our offerings to meet your unique needs. Thank you for entrusting us with your customized service experience!"
                    }
                  ></textarea>
                  {/* <input
                    type=""
                    name="serviceArea"
                    placeholder="Service Area"
                    className="input input-bordered w-full"
                  /> */}
                </label>
              </div>
            </div>
            {/* form Photo url row */}
            <div className="mb-8  gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-green-900 font-semibold ">
                    Service Image
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="serviceImage"
                    defaultValue={image}
                    placeholder="Service Image"
                    className="input input-bordered w-full"
                    readOnly
                  />
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Book Product"
              className="text-white bg-[#0b996f] px-7 py-3 rounded-full font-semibold w-full cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModaLInput;
