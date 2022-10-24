import { ChangeEvent, FormEvent, useState } from "react";

import { Link } from "react-router-dom";
import { NivelCurso } from "../../../types";
import Wrapper from "../../ui/wrapper";
import { addCursoToDatabase } from "../api/addCursoToDatabase";
import { IFormCadastroCurso } from "../types/IFormCadastroAluno";
import "./styles.css";

const CadastroCurso = () => {
  const [formData, setFormData] = useState<IFormCadastroCurso>({
    nomeDoCurso: "",
    nivelDoCurso: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Enviar dados do formulário para o banco de dados
    // TODO: criar função
    await addCursoToDatabase(formData);
  };

  return (
    <>
      <Wrapper>
        <div>Cadastrode novo curso</div>
        <div className="novo-curso_form">
          <form onSubmit={handleSubmit}>
            <div className="form-input-section">
              <h2>Dados do curso</h2>
              <div className="input-group">
                <label htmlFor="nomedocurso">Nome do curso: </label>
                <input
                  type="text"
                  id="nomedocurso"
                  placeholder="Nome do curso"
                  name="nomeDoCurso"
                  value={formData.nomeDoCurso}
                  onChange={handleChange}
                />
              </div>
              {/*  */}
              <div className="input-group">
                <label htmlFor="niveldocurso">Nível do curso</label>
                <select
                  name="nivelDoCurso"
                  id="niveldocurso"
                  onChange={handleChange}
                  defaultValue=""
                >
                  <option value="" disabled>
                    --ESCOLHA--
                  </option>
                  <option value={NivelCurso.bacharel}>
                    {NivelCurso.bacharel}
                  </option>
                  <option value={NivelCurso.licenciatura}>
                    {NivelCurso.licenciatura}
                  </option>
                  <option value={NivelCurso.medio_integrado}>
                    {NivelCurso.medio_integrado}
                  </option>
                  <option value={NivelCurso.tecnico}>
                    {NivelCurso.tecnico}
                  </option>
                  <option value={NivelCurso.tecnologo}>
                    {NivelCurso.tecnologo}
                  </option>
                </select>
              </div>
            </div>
            {/*  */}
            <button type="submit">Cadastrar</button>
            <Link to="/">
              <button type="reset">Cancelar</button>
            </Link>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default CadastroCurso;
