import styles from "./ErrorMessage.module.css";

export const ErrorMessage = (message: string) => {
  return (
    <>
      <p className={styles.message}>{message}</p>
    </>
  );
};
