import Lottie from "lottie-react";
import Bookings from "../../components/Bookings/Bookings";
import noBooking from "../../assets/noBooking.json";
import pending from "../../assets/pending.json";
import PendingWorks from "../../components/PendingWorks/PendingWorks";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
const MySchedules = () => {
  const { user } = useContext(AuthContext);

  const [currentBooking, setCurrentBooking] = useState([]);
  const url = `http://localhost:5000/booking?userEmail=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCurrentBooking(data));
  }, [url]);

  return (
    <div className="max-w-screen-xl mx-auto px-8">
      <Helmet>
        <title>RideWave | My Schedules</title>
      </Helmet>
      <div>
        <h1 className="text-[#0b996f]  text-4xl font-semibold py-8 text-center">
          My Bookings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {currentBooking.length > 0 ? (
            currentBooking.map((booking) => (
              <Bookings booking={booking} key={booking._id}></Bookings>
            ))
          ) : (
            <div className="col-span-3 mt-10">
              <div>
                <h1 className="text-5xl text-red-600 text-center">
                  No Bookings Found
                </h1>
                <Lottie
                  animationData={noBooking}
                  loop={false}
                  className="h-96"
                ></Lottie>
              </div>
            </div>
          )}
        </div>

        <div>
          <h1 className="text-[#0b996f]  text-4xl font-semibold mt-20 py-8 text-center">
            My Pending works
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {currentBooking.length > 0 ? (
              currentBooking.map((pendingBooking) => (
                <PendingWorks
                  pendingBooking={pendingBooking}
                  key={pendingBooking._id}
                ></PendingWorks>
              ))
            ) : (
              <div className="col-span-3 mt-10">
                <div>
                  <h1 className="text-5xl text-red-600 text-center">
                    No Pending Works Found
                  </h1>
                  <Lottie
                    animationData={pending}
                    loop={false}
                    className="h-96"
                  ></Lottie>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySchedules;
