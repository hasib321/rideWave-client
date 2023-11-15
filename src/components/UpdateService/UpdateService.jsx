import { useContext } from "react";
import { AuthContext } from "../../Pages/Auth/AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateService = () => {
  const { user } = useContext(AuthContext);
  const services = useLoaderData();
  const {
    _id,
    name,
    serviceName,
    price,
    Description,
    serviceArea,
    image,
    serviceProviderImage,
  } = services || {};
  console.log(services);

  const handleUpdateService = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const serviceName = form.serviceName.value.toUpperCase();
    const price = form.price.value;
    const Description = form.description.value;
    const serviceArea = form.serviceArea.value;
    const image = form.image.value;

    const updateService = {
      name,
      email,
      serviceName,
      price,
      Description,
      serviceArea,
      image,
    };

    // send data to the server
    fetch(` https://ridewave-server.vercel.app/service/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Yahooo!", "service Updated Successfully", "success");
          form.reset();
        }
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto px-8">
      <div className="pb-10">
        <h2 className="text-3xl font-extrabold text-center my-5 text-[#0b996f]">
          Update Service
        </h2>
        <form onSubmit={handleUpdateService}>
          {/* form name */}
          <div className="md:flex gap-5 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-green-900 font-semibold ">
                  {" "}
                  Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text text-green-900 font-semibold ">
                  Email
                </span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="Email Address"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex  gap-5 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-green-900 font-semibold ">
                  Service Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="serviceName"
                  defaultValue={serviceName}
                  placeholder="Service Name"
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
                  placeholder="Price"
                  defaultValue={price}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex  gap-5 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-green-900 font-semibold ">
                  Description
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  defaultValue={Description}
                  placeholder="Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text text-green-900 font-semibold ">
                  Service Area
                </span>
              </label>

              <label className="input-group">
                <input
                  type="text"
                  name="serviceArea"
                  defaultValue={serviceArea}
                  placeholder="Service Area"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Photo url row */}
          <div className="mb-8  gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-green-900 font-semibold ">
                  Image
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  placeholder="Image"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Service"
            className="text-white bg-[#0b996f] px-7 py-3 rounded-full font-semibold w-full cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
