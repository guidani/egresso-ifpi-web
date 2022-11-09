import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ICurso, NivelCurso } from "../../../types";
import Wrapper from "../../ui/wrapper";
import { addCursoToDatabase } from "../api/addCursoToDatabase";
import "./styles.css";

const CadastroCurso = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICurso>();

  const submitForm = async (data: any) => {
    console.log(data);
    // Enviar dados do formulário para o banco de dados
    // TODO: criar função
    await addCursoToDatabase(data);
  };

  return (
    <>
      <Wrapper>
        <div>Cadastrode novo curso</div>
        <div className="novo-curso_form">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="form-input-section">
              <h2>Dados do curso</h2>
              <div className="input-group">
                <label htmlFor="nomedocurso">Nome do curso: </label>
                <input
                  type="text"
                  id="nomedocurso"
                  placeholder="Nome do curso"
                  {...register("nome", { required: true })}
                />
              </div>
              {/*  */}
              <div className="input-group">
                <label htmlFor="niveldocurso">Nível do curso</label>
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
