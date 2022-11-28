import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import styles from "./styles.module.css";

interface IUserLogin {
  userEmail: string;
  userPassword: string;
}

const Login = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { logInWithEmailAndPassword } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserLogin>();

  const onSubmit: SubmitHandler<IUserLogin> = async (data) => {
    try {
      await logInWithEmailAndPassword(data.userEmail, data.userPassword);
      navigate("/");
    } catch (error) {
      if (error) {
        setErrorMessage("Algo deu errado");
      }
    }
  };

  useEffect(() => {
    setErrorMessage(null);
  }, []);

  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
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
            {errors.userPassword && "Insira a senha."}
          </div>
          <button type="submit" className={`${styles.btn} btnPrimary`}>
            Entrar
          </button>
        </form>
        <div className={styles.linkRow}>
          <Link to="/register">Cadastre-se aqui.</Link>
          <Link to="/forgot-password">Recuperar senha</Link>
        </div>
      </div>
    </>
    // adicionar formulário de login
  );
};

export default Login;
