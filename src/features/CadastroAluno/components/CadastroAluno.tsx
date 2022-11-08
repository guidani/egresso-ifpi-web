import { useFieldArray, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { TipoOcupacao } from "../../../types";
import Wrapper from "../../ui/wrapper";
import { IAluno } from "../types/IAluno";
import MatriculaForm from "./MatriculaForm";
import "./styles.css";

const fieldArrayName = "matriculas";

const CadastroAluno = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAluno>({
    defaultValues:{
      cpf:"",
      dataDeEncerramentoTrabalho:"",
      dataDeInicioTrabalho:"",
      dataDeNascimento:"",
      email:"",
      localDeTrabalho:"",
      nome:"",
      telefone:"",
      tipoDeOcupacao:"",
      trabalhoRemunerado:"",
      matriculas:[]
    }
  });
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: fieldArrayName,
    defaultValues: {
      [fieldArrayName]: [],
    },
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    // Enviar dados do formulário para o banco de dados
    // await addAlunoToDatabase(formData);
  };

  return (
    <>
      <Wrapper>
        <div>Cadastro de novo aluno</div>
        <div className="novo-aluno_form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input-section">
              <h2>Dados do aluno</h2>
              <div className="input-group">
                <label htmlFor="nomealuno">Nome:</label>
                <input
                  type="text"
                  placeholder="Nome do aluno"
                  id="nomealuno"
                  {...register("nome", { required: true })}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  placeholder="email@email.com.br"
                  id="emailaluno"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="input-group">
                <label htmlFor="telefonealuno">Telefone:</label>
                <input
                  type="string"
                  id="telefonealuno"
                  placeholder="86912345678"
                  {...register("telefone")}
                />
              </div>
              <div className="input-group">
                <label htmlFor="datanascimentoaluno">Data de nascimento:</label>
                <input
                  type="date"
                  id="datanascimentoaluno"
                  {...register("dataDeNascimento")}
                />
              </div>
              <div className="input-group">
                <label htmlFor="cpfaluno">CPF:</label>
                <input
                  type="text"
                  placeholder="123.456.789-00"
                  maxLength={14}
                  id="cpfaluno"
                  {...register("cpf")}
                />
              </div>
            </div>
            {/* //TODO deve ser possível adicionar várias matrículas */}
            <div className="form-input-section">
              <h2>Matrícula</h2>
              {fields.map((field, index) => (
                <fieldset key={field.id}>
                  <MatriculaForm
                    control={control}
                    index={index}
                    update={update}
                    value={field}
                  />
                  <button onClick={() => remove(index)}>Remover</button>
                </fieldset>
              ))}
              <br />
              <button
                type="button"
                className="btnPrimary"
                onClick={() => {
                  append({
                    curso: "",
                    numeroMatricula: "",
                    statusDaMatricula: "",
                    dataDeInicioCurso: "",
                    dataDeEncerramentoCurso: "",
                  });
                }}
              >
                Nova matrícula
              </button>
            </div>
            {/* // TODO end */}
            <div className="form-input-section">
              <h2>Ocupação</h2>
              <div className="input-group">
                <label htmlFor="">Tipo de ocupação:</label>

                <select {...register("tipoDeOcupacao")}>
                  <option value="" disabled>
                    --ESCOLHA--
                  </option>
                  <option value={TipoOcupacao.efetivo}>efetivo</option>
                  <option value={TipoOcupacao.estagio}>estagio</option>
                  <option value={TipoOcupacao.iniciacaoCientifica}>
                    iniciacaoCientifica
                  </option>
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="localdetrabalhoaluno">Local:</label>
                <input
                  type="text"
                  placeholder="Nome do local de trabalho"
                  id="localdetrabalhoaluno"
                  {...register("localDeTrabalho")}
                />
              </div>
              <div className="input-group">
                <label htmlFor="datainiciotrabalhoaluno">Data de início:</label>
                <input
                  type="date"
                  id="datainiciotrabalhoaluno"
                  {...register("dataDeInicioTrabalho")}
                />
              </div>
              <div className="input-group">
                <label htmlFor="dataencerramentotrabalhoaluno">
                  Data de encerramento:
                </label>
                <input
                  type="date"
                  id="dataencerramentotrabalhoaluno"
                  {...register("dataDeEncerramentoTrabalho")}
                />
              </div>
              <div className="input-group">
                Trabalho Remunerado:
                <label htmlFor="alunoocupacaoremuneradosim">Sim</label>
                <input
                  {...register("trabalhoRemunerado")}
                  type="radio"
                  value="Sim"
                />
                <label htmlFor="alunoocupacaoremuneradonao">Não</label>
                <input
                  {...register("trabalhoRemunerado")}
                  type="radio"
                  value="Não"
                />
              </div>
            </div>
            {/* ### */}
            <div className="btnRow">
              <button type="submit" className="btnPrimary">
                Cadastrar
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
    </>
  );
};

export default CadastroAluno;
