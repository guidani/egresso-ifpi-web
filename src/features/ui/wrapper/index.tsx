import React from "react";
import styles from "./wrapper.module.css";

interface IProps {
  children?: React.ReactNode;
}

const Wrapper = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Wrapper;
