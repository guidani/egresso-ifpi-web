import styles from "./LoginLayout.module.css";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Outlet />
      </div>
    </>
  );
};

export default LoginLayout;
