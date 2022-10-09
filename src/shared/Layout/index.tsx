import { Outlet } from "react-router-dom";
import Barnavigation from "../../features/ui/bar-navigation";

const Layout = () => {
  return (
    <>
      <Barnavigation/>
      <Outlet />
    </>
  );
};

export default Layout;
