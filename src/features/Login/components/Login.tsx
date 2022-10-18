import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import './styles.css'

interface IUserLogin {
  email: string;
  password: string;
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Enviar dados do formulário para o banco de dados
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="userEmail">E-mail</label>
          <input
            type="email"
            placeholder="Seu e-mail"
            value={formData.email}
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
            value={formData.password}
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
    </>
    // adicionar formulário de login
  );
};

export default Login;
