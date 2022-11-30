import { Link, Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../auth/hooks/useAuth";
import Wrapper from "../wrapper";
import styles from "./styles.module.css";

const Barnavigation = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.topBar}>
        <Wrapper>
          <div className={styles.flexRow}>
            <Link to={"/"} className={styles.topBarLogo}>
              Egresso IFPI
            </Link>
            <nav className={styles.navBar}>
              <div>Bem vindo: {user.email}</div>
              <Link to="/" onClick={handleLogOut}>
                Sair
              </Link>
            </nav>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Barnavigation;
