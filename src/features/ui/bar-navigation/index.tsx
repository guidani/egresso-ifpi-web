import { Link } from "react-router-dom";
import useAuth from "../../Login/hooks/useAuth";
import Wrapper from "../wrapper";
import styles from "./styles.module.css";

const Barnavigation = () => {
  const { email, uid } = useAuth();
  return (
    <>
      <div className={styles.topBar}>
        <Wrapper>
          <div>
            <Link to={"/"}>
              <img
                src="topo_ifpi.png"
                alt="Logo Ifpi"
                className={styles.topBarImage}
              />
            </Link>
            <nav>
              <Link to={"/login"}>Sair</Link>
              <p>Bem vindo: {email}</p>
            </nav>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Barnavigation;
