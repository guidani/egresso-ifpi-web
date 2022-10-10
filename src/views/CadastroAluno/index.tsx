import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { StatusMatriculaAluno, TipoOcupacao } from "../../types";
import "./styles.css";

interface IFormCadastroAlunoo {
  nome: string;
  email: string;
  telefone: number;
  dataDeNascimento: string;
  cpf: string;
  numeroMatricula: string;
  dataDeInicioCurso: string;
  dataDeEncerramentoCurso: string;
  statusDaMatricula: StatusMatriculaAluno | string;
  curso: string;
  tipoDeOcupacao: TipoOcupacao | string;
  localDeTrabalho: string;
  dataDeInicioTrabalho: string;
  dataDeEncerramentoTrabalho: string;
  trabalhoRemunerado: string;
}

const CadastroAluno = () => {
  const [formData, setFormData] = useState<IFormCadastroAlunoo>(
    {} as IFormCadastroAlunoo
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
    })
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData)
    console.log("formulário enviado");
    // Enviar dados do formulário para o banco de dados
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
                  name="nomealuno"
                  id="nomealuno"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="emailaluno">
                E-mail:
                <input
                  type="email"
                  placeholder="email@email.com.br"
                  name="emailaluno"
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
                  name="telefonealuno"
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
                  name="datanascimentoaluno"
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
                  name="cpfaluno"
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
                  name="matriculaaluno"
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
                  name="datainiciocursoaluno"
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
                  name="dataencerramentocursoaluno"
                  id="dataencerramentocursoaluno"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="alunostatusmatricula">
                Status da matrícula:
                <select name="alunostatusmatricula" id="alunostatusmatricula">
                  <option value={StatusMatriculaAluno.emAndamento} >
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
                  name="cursoaluno"
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
                <select name="alunotipoocupacao" id="alunotipoocupacao">
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
                  name="localdetrabalhoaluno"
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
                  name="datainiciotrabalhoaluno"
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
                  name="dataencerramentotrabalhoaluno"
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
                  name="alunoocupacaoremunerado"
                  value="Sim"
                  id="alunoocupacaoremuneradosim"
                  onChange={handleChange}
                />
                Sim
              </label>
              <label htmlFor="alunoocupacaoremuneradonao">
                <input
                  type="radio"
                  name="alunoocupacaoremunerado"
                  value="Não"
                  id="alunoocupacaoremuneradonao"
                  onChange={handleChange}
                />
                Não
              </label>
            </div>
          </div>
          {/* ### */}
          <button type="submit">Cadastrar</button>
          <Link to="/">
            <button type="submit">Cancelar</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default CadastroAluno;
