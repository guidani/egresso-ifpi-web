import { Link } from "react-router-dom";
import useAuth from "../../Login/hooks/useAuth";
import Wrapper from "../wrapper";
import styles from "./styles.module.css";

const Barnavigation = () => {
  return (
    <>
      <div className={styles.topBar}>
        <Wrapper>
          <div className={styles.flexRow}>
            <Link to={"/"}>
              Egresso IFPI
            </Link>
            <nav className={styles.navBar}>
              <Link to={"/login"}>Sair</Link>
              {/* <p>Bem vindo: {email}</p> */}
            </nav>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Barnavigation;
