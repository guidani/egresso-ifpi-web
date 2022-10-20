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
            <Link to="/cadastro-aluno">
              <button className="btnPrimary">Cadastrar Novo Aluno</button>
            </Link>
            <Link to="/cadastro-curso">
              <button className="btnPrimary">Cadastrar Novo Curso</button>
            </Link>
          </div>
          <div className="btnRow">
            <Link to="/listagem-cursos">
              <button className="btnPrimary">Ver cursos</button>
            </Link>
          </div>

          <Dashboard />
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
