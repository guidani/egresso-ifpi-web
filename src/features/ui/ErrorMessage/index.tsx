import styles from "./ErrorMessage.module.css";

export const ErrorMessage = (message: string) => {
  return <div className={styles.message}>{message}</div>;
};
