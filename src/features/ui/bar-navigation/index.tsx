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

  // if (!user) return <Navigate to="/" replace />;

  return (
    <>
      <div className={styles.topBar}>
        <Wrapper>
          <div className={styles.flexRow}>
            <Link to={"/"} className={styles.topBarLogo}>
              Egresso IFPI
            </Link>
            <nav className={styles.navBar}>
              <Link to="/" onClick={handleLogOut}>
                Sair
              </Link>
              <p>Bem vindo: {user.email}</p>
            </nav>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Barnavigation;
