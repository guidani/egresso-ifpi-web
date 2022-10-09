import { Link, NavLink } from "react-router-dom";
import './styles.css'

const Barnavigation = () => {
  return (
    <>
      <div id="top-bar__navigation">
        <a href="/">
          <img src="topo_ifpi.png" alt="Logo Ifpi" />
        </a>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
      </div>
    </>
  );
};

export default Barnavigation;
