import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const handleAddService = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const serviceName = form.serviceName.value.toUpperCase();
    const price = form.price.value;
    const Description = form.description.value;
    const serviceArea = form.serviceArea.value;
    const image = form.image.value;

    const addService = {
      name,
      email,
      serviceName,
      price,
      Description,
      serviceArea,
      image,
    };

    // send data to the server
    axios.post("http://localhost:5000/service", addService).then((res) => {
      if (res.data.insertedId) {
        Swal.fire("Yahooo!", "Services Added Successfully", "success");
        form.reset();
      }
    });
  };
  return (
    <div className=" min-h-screen">
      <Helmet>
        <title>RideWave | Add Service</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto px-8">
        <div>
          <h2 className="text-3xl font-extrabold text-center my-5 text-[#0b996f]">
            Add Service
          </h2>
          <form onSubmit={handleAddService}>
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
                    readOnly
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
                    Service Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="serviceName"
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
                    placeholder="Image"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Add Product"
              className="text-white bg-[#0b996f] px-7 py-3 rounded-full font-semibold w-full cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
