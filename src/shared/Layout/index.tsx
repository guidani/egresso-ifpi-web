import { Outlet } from "react-router-dom";
import Barnavigation from "../../features/ui/bar-navigation";

const Layout = () => {
  return (
    <>
      <h1>IFPI Egresso</h1>
      <Barnavigation/>
      <Outlet />
    </>
  );
};

export default Layout;
