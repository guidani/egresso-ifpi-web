import { signInWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../database/firebase/config";

import styles from "./styles.module.css";

interface IUserLogin {
  userEmail: string;
  userPassword: string;
}

const Login = () => {
  const [formData, setFormData] = useState<IUserLogin>({} as IUserLogin);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const doUserLogin = async (email: string, password: string) => {
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } catch (error) {}
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await doUserLogin(formData.userEmail, formData.userPassword);
    console.log(formData);
    // Enviar dados do formulário para o banco de dados
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img src="topo_ifpi.png" alt="Logo_IFPI" />
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="userEmail">E-mail</label>
            <input
              type="email"
              placeholder="Seu e-mail"
              value={formData.userEmail}
              id="userEmail"
              name="userEmail"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="userPassword">Senha</label>
            <input
              type="password"
              placeholder="Sua senha"
              value={formData.userPassword}
              id="userPassword"
              name="userPassword"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btnPrimary">
            Entrar
          </button>
        </form>
        <div className="btnRow">
          <Link to="/register">
            <a href="#">Cadastre-se aqui.</a>
          </Link>
          <Link to={"/"}>
            <a href="#">Recuperar senha</a>
          </Link>
        </div>
      </div>
    </>
    // adicionar formulário de login
  );
};

export default Login;
