import { Link } from "react-router-dom";
import Wrapper from "../../features/ui/wrapper";
import "./styles.css";

const Home = () => {
  return (
    <>
      <Wrapper>
        <div className="home-container">
          <div className="btnRow">
            <Link to="/egresso" className="btn btnPrimary">
              Egresso
            </Link>
            <Link to="/administrativo" className="btn btnPrimary">
              Administrativo
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
