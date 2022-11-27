import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

interface IForgotPasswordForm {
  userEmail: string;
}

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForgotPasswordForm>();

  const onSubmit: SubmitHandler<IForgotPasswordForm> = (data) =>
    console.log(data);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img src="topo_ifpi.png" alt="Logo_IFPI" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label htmlFor="userEmail">E-mail</label>
            <input
              {...register("userEmail", { required: true })}
              type="email"
              placeholder="email@email.com"
              id="userEmail"
              name="userEmail"
            />
            {errors.userEmail && "Preencha com um e-mail!"}
          </div>
          <button type="submit" className={`${styles.btn} btnPrimary`}>
            Resetar
          </button>
        </form>
        <div className={styles.linkRow}>
          <Link to="/">Voltar</Link>
        </div>
      </div>
    </>
    // adicionar formulário de login
  );
};

export default ForgotPasswordForm;
