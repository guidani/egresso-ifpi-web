import { Link } from "react-router-dom";
import Dashboard from "../../features/Dashboard";
import "./styles.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="btnRow">
          <Link to="/cadastro-aluno">
            <button className="btnPrimary">Cadastrar Novo Aluno</button>
          </Link>
          <Link to="/cadastro-curso">
            <button className="btnPrimary">Cadastrar Novo Curso</button>
          </Link>
        </div>

        <Dashboard />
      </div>
    </>
  );
};

export default Home;
