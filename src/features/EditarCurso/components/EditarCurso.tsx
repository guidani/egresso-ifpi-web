import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { ICurso, NivelCurso } from "../../../types";
import Wrapper from "../../ui/wrapper";
import { getCourseFromDatabase } from "../api/getCourseFromDatabase";
import { updateCourse } from "../api/updateCourse";

export const EditarCurso = () => {
  const { courseId } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICurso>();
  const [loading, setLoading] = useState(false);

  // TODO: atualizar dados no banco
  const submitForm = async (data: any) => {
    try {
      setLoading(true);
      // Atualizar curso no banco de dados
      await updateCourse(courseId!, data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCourseFromDatabase(courseId!)
      .then((resp) => {
        reset({
          nome: resp?.nome,
          nivel: resp?.nivel,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <div className="novo-curso_form">
        <div>
          {loading && (
            <>
              <h2>Aguarde...</h2>
            </>
          )}
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
                <option value={NivelCurso.tecnico}>{NivelCurso.tecnico}</option>
                <option value={NivelCurso.tecnologo}>
                  {NivelCurso.tecnologo}
                </option>
              </select>
            </div>
          </div>
          {/*  */}
          <div className="btnRow">
            <button type="submit" className="btnPrimary">
              Atualizar
            </button>
            <Link to="/">
              <button type="reset" className="btnDanger">
                Cancelar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};