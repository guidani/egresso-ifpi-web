import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { StatusMatriculaAluno, TipoOcupacao } from "../../../types";
import { addAlunoToDatabase } from "../api/addAlunoToDatabase";
import { IAluno } from "../types/IAluno";
import "./styles.css";

const CadastroAluno = () => {
  const [formData, setFormData] = useState<IAluno>({
    nome: "",
    email: "",
    telefone: 0,
    dataDeNascimento: "",
    cpf: "",
    numeroMatricula: "",
    dataDeInicioCurso: "",
    dataDeEncerramentoCurso: "",
    statusDaMatricula: "",
    curso: "",
    tipoDeOcupacao: "",
    localDeTrabalho: "",
    dataDeInicioTrabalho: "",
    dataDeEncerramentoTrabalho: "",
    trabalhoRemunerado: "",
  });

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
    await addAlunoToDatabase(formData);
  };

  return (
    <>
      <div>Cadastro de novo aluno</div>
      <div className="novo-aluno_form">
        <form onSubmit={handleSubmit}>
          <div className="form-input-section">
            <h2>Dados do aluno</h2>
            <div className="input-group">
              <label htmlFor="nomealuno">
                Nome:
                <input
                  type="text"
                  placeholder="Nome do aluno"
                  name="nome"
                  id="nomealuno"
                  onChange={handleChange}
                  value={formData.nome}
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="email">
                E-mail:
                <input
                  type="email"
                  placeholder="email@email.com.br"
                  name="email"
                  id="emailaluno"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="telefonealuno">
                Telefone:
                <input
                  type="number"
                  name="telefone"
                  id="telefonealuno"
                  placeholder="86912345678"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="datanascimentoaluno">
                Data de nascimento:
                <input
                  type="date"
                  name="dataDeNascimento"
                  id="datanascimentoaluno"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="cpfaluno">
                CPF:
                <input
                  type="text"
                  placeholder="123.456.789-00"
                  maxLength={14}
                  name="cpf"
                  id="cpfaluno"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className="form-input-section">
            <h2>Matrícula</h2>
            <div className="input-group">
              <label htmlFor="matriculaaluno">
                Número da matrícula
                <input
                  type="text"
                  name="numeroMatricula"
                  id="matriculaaluno"
                  placeholder="número da matrícula"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="datainiciocursoaluno">
                Data de início:
                <input
                  type="date"
                  name="dataDeInicioCurso"
                  id="datainiciocursoaluno"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="dataencerramentocursoaluno">
                Data de encerramento:
                <input
                  type="date"
                  name="dataDeEncerramentoCurso"
                  id="dataencerramentocursoaluno"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="input-group">
              <label htmlFor="alunostatusmatricula">
                Status da matrícula:
                <select
                  name="statusDaMatricula"
                  id="alunostatusmatricula"
                  onChange={handleChange}
                  defaultValue=""
                >
                  <option value="" disabled>
                    --ESCOLHA--
                  </option>
                  <option value={StatusMatriculaAluno.emAndamento}>
                    {StatusMatriculaAluno.emAndamento}
                  </option>
                  <option value={StatusMatriculaAluno.concluido}>
                    {StatusMatriculaAluno.concluido}
                  </option>
                  <option value={StatusMatriculaAluno.desistente}>
                    {StatusMatriculaAluno.desistente}
                  </option>
                  <option value={StatusMatriculaAluno.cancelado}>
                    {StatusMatriculaAluno.cancelado}
                  </option>
                </select>
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="cursoaluno">
                Curso:
                <input
                  type="text"
                  placeholder="Curso do aluno"
                  name="curso"
                  id="cursoaluno"
                  onChange={handleChange}
                />
              </label>
            </div>

            {/* #### */}
          </div>
          {/* #### */}
          <div className="form-input-section">
            <h2>Ocupação</h2>

            <div className="input-group">
              <label htmlFor="">
                Tipo de ocupação:
                <select
                  name="tipoDeOcupacao"
                  id="alunotipoocupacao"
                  onChange={handleChange}
                  defaultValue=""
                >
                  <option value="" disabled>
                    --ESCOLHA--
                  </option>
                  <option value={TipoOcupacao.efetivo}>
                    {TipoOcupacao.efetivo}
                  </option>
                  <option value={TipoOcupacao.estagio}>
                    {TipoOcupacao.estagio}
                  </option>
                  <option value={TipoOcupacao.iniciacaoCientifica}>
                    {TipoOcupacao.iniciacaoCientifica}
                  </option>
                </select>
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="localdetrabalhoaluno">
                Local:
                <input
                  type="text"
                  placeholder="Nome do local de trabalho"
                  name="localDeTrabalho"
                  id="localdetrabalhoaluno"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="datainiciotrabalhoaluno">
                Data de início:
                <input
                  type="date"
                  name="dataDeInicioTrabalho"
                  id="datainiciotrabalhoaluno"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="dataencerramentotrabalhoaluno">
                Data de encerramento:
                <input
                  type="date"
                  name="dataDeEncerramentoTrabalho"
                  id="dataencerramentotrabalhoaluno"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="input-group">
              Remunerado:
              <label htmlFor="alunoocupacaoremuneradosim">
                <input
                  type="radio"
                  name="trabalhoRemunerado"
                  value="Sim"
                  id="alunoocupacaoremuneradosim"
                  onChange={handleChange}
                />
                Sim
              </label>
              <label htmlFor="alunoocupacaoremuneradonao">
                <input
                  type="radio"
                  name="trabalhoRemunerado"
                  value="Não"
                  id="alunoocupacaoremuneradonao"
                  onChange={handleChange}
                />
                Não
              </label>
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
    </>
  );
};

export default CadastroAluno;
