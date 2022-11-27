import { Outlet } from "react-router-dom";
import Barnavigation from "../../features/ui/bar-navigation";
import './styles.css'

const Layout = () => {
  return (
    <>
      <Barnavigation/>
      <Outlet />
    </>
  );
};

export default Layout;
