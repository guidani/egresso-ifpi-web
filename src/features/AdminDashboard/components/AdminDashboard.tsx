import { Link } from "react-router-dom";
import Dashboard from "../../Dashboard";
import Wrapper from "../../ui/wrapper";
import "./styles.css";

const AdminDashboard = () => {
  return (
    <>
      <Wrapper>
        <div className="home-container">
          <div className="btnRow">
            <Link to="administrativo/alunos/cadastro-aluno" className="btn btnPrimary">
              Cadastrar Novo Aluno
            </Link>
            <Link to="administrativo/cursos/cadastro-curso" className="btn btnPrimary">
              Cadastrar Novo Curso
            </Link>
          </div>
          <div className="btnRow">
            <Link to="administrativo/alunos/listagem-alunos" className="btn btnPrimary">
              Ver alunos
            </Link>
            <Link to="administrativo/cursos/listagem-cursos" className="btn btnPrimary">
              Ver cursos
            </Link>
          </div>
          <Dashboard />
        </div>
      </Wrapper>
    </>
  );
};

export default AdminDashboard;
