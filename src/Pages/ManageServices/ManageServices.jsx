import { Helmet } from "react-helmet-async";
import useService from "../../CustomHook/UseService/useService";
import Loading from "../../components/Loading/Loading";
import Manageservice from "./Manageservice";

const ManageServices = () => {
  const { data, isLoading, isFetching, refetch } = useService();
  if (isLoading === true) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-8">
      {/* Site Naming */}
      <Helmet>
        <title>RideWave | Manage Services</title>
      </Helmet>
      <div className="text-center py-8 space-y-3">
        <h1 className="text-[#0b996f] text-4xl font-semibold">
          Customized Our Services
        </h1>
      </div>
      {/* services Card */}
      <div>
        {data?.map((manageService) => (
          <Manageservice
            refetch={refetch}
            manageService={manageService}
            key={manageService._id}
          ></Manageservice>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
