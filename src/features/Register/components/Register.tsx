import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IUserRegister {
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const [formData, setFormData] = useState<IUserRegister>({} as IUserRegister);
  const navigate = useNavigate();

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
    // validar se a senha e a confirmação de senha são iguais
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
        <div className="input-group">
          <label htmlFor="confirmPassword">Repita a Senha</label>
          <input
            type="password"
            placeholder="Repita sua senha"
            value={formData.confirmPassword}
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
            required
          />
        </div>
        <div className="btnRow">
          <button type="submit" className="btn btnPrimary">
            Registrar
          </button>
          <button
            type="reset"
            className="btn btnDanger"
            onClick={() => navigate("/login")}
          >
            Cancelar
          </button>
        </div>
      </form>
    </>
    // adicionar formulário de login
  );
};

export default Register;
