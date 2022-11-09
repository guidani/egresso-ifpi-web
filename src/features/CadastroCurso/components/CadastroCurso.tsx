import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ICurso, NivelCurso } from "../../../types";
import { ErrorMessage } from "../../ui/ErrorMessage";
import Wrapper from "../../ui/wrapper";
import { addCursoToDatabase } from "../api/addCursoToDatabase";
import "./styles.css";

const CadastroCurso = () => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICurso>();

  const submitForm = async (data: any) => {
    try {
      setLoading(true);
      console.log(data);
      await addCursoToDatabase(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Wrapper>
        <div className="novo-curso_form">
          <div>
            {loading && (<><h2>Aguarde...</h2></>)}
          </div>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="form-input-section">
              <h2>Dados do curso</h2>
              <div className="input-group">
                <label htmlFor="nomedocurso">Nome do curso*</label>
                <input
                  type="text"
                  id="nomedocurso"
                  placeholder="Nome do curso"
                  {...register("nome", { required: true, minLength: 3 })}
                />
                {errors.nome && "Nome é obrigatório"}
              </div>
              {/*  */}
              <div className="input-group">
                <label htmlFor="niveldocurso">Nível do curso*</label>
                <select
                  id="niveldocurso"
                  {...register("nivel", { required: true })}
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
