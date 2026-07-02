import { Outlet } from "react-router-dom";
import Nav from "../../components/ui/Nav";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className='w-full max-lg:w-full'>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
