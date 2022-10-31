import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

interface IForgotPasswordForm {
  userEmail: string;
}

const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState<IForgotPasswordForm>(
    {} as IForgotPasswordForm
  );

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
          <button type="submit" className={`${styles.btn} btnPrimary`}>
            Resetar
          </button>
        </form>
        <div className={styles.linkRow}>
          <Link to="/login">
            Voltar
          </Link>

        </div>
      </div>
    </>
    // adicionar formulário de login
  );
};

export default ForgotPasswordForm;
