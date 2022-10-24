import { Link } from "react-router-dom";
import Dashboard from "../../features/Dashboard";
import Wrapper from "../../features/ui/wrapper";
import "./styles.css";

const Home = () => {
  return (
    <>
      <Wrapper>
        <div className="home-container">
          <div className="btnRow">
            <Link to="/cadastro-aluno" className="btn btnPrimary">
              Cadastrar Novo Aluno
            </Link>
            <Link to="/cadastro-curso" className="btn btnPrimary">
              Cadastrar Novo Curso
            </Link>
          </div>
          <div className="btnRow">
            <Link to="/listagem-alunos" className="btn btnPrimary">
              Ver alunos
            </Link>
            <Link to="/listagem-cursos" className="btn btnPrimary">
              Ver cursos
            </Link>
          </div>

          <Dashboard />
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
