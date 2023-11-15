import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Header/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Layout = () => {
  return (
    <div>
      {/* max-w-screen-xl mx-auto px-8 */}
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
