import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { doUserRegister } from "../api/doUserRegister";
import styles from "./styles.module.css";

interface IUserRegister {
  userEmail: string;
  userPassword: string;
  confirmPassword: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserRegister>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IUserRegister> = async (data) => {
    try {
      if (data.userPassword !== data.confirmPassword) {
        console.log("As senhas não conferem");
        return;
      }
      await doUserRegister(data.userEmail, data.userPassword);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img src="topo_ifpi.png" alt="Logo_IFPI" />
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label htmlFor="userEmail">E-mail</label>
            <input
              {...register("userEmail", { required: true })}
              type="email"
              placeholder="Seu e-mail"
              id="userEmail"
              name="userEmail"
            />
            {errors.userEmail && "Insira um e-mail!"}
          </div>
          <div className="input-group">
            <label htmlFor="userPassword">Senha</label>
            <input
              {...register("userPassword", { required: true })}
              type="password"
              placeholder="Sua senha"
              id="userPassword"
              name="userPassword"
            />
            {errors.userPassword && "Insira a senha!"}
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Repita a Senha</label>
            <input
              {...register("confirmPassword", { required: true })}
              type="password"
              placeholder="Repita a senha"
              id="confirmPassword"
              name="confirmPassword"
            />
            {errors.confirmPassword && "Insira a senha novamente!"}
          </div>
          <button type="submit" className={`${styles.btn} btnPrimary`}>
            Cadastrar
          </button>
            <Link to="/" >
          <button type="reset" className={`${styles.btn} btnDanger`}>
              Cancelar
          </button>
            </Link>
        </form>
      </div>
    </>
  );
};

export default Register;