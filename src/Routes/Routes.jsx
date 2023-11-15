import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Auth/Registration/Registration";
import Login from "../Pages/Auth/Login/Login";
import AddProduct from "../Pages/AddProduct/AddProduct";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import AllServices from "../Pages/AllServices/AllServices";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import ManageServices from "../Pages/ManageServices/ManageServices";
import UpdateService from "../components/UpdateService/UpdateService";
import MySchedules from "../Pages/MySchedules/MySchedules";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/allServices",
        element: <AllServices></AllServices>,
      },
      {
        path: "/allServices/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://ridewave-server.vercel.app/service/${params.id}`),
      },

      {
        path: "/addServices",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/manageServices/:id",
        element: <UpdateService></UpdateService>,
        loader: ({ params }) =>
          fetch(`https://ridewave-server.vercel.app/service/${params.id}`),
      },

      {
        path: "/manageServices",
        element: (
          <PrivateRoute>
            <ManageServices></ManageServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/mySchedules",
        element: (
          <PrivateRoute>
            <MySchedules></MySchedules>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default myRouter;
