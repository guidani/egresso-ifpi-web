import { Link } from "react-router-dom";
import Dashboard from "../../features/Dashboard";
import "./styles.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Link to="/cadastro-aluno">
          <button className="btn-cadastro">Cadastrar Novo Aluno</button>
        </Link>
        
        <Link to="/cadastro-curso">
          <button className="btn-cadastro">Cadastrar Novo Curso</button>
        </Link>
        
        <hr />
        <Dashboard/>
      </div>
    </>
  );
};

export default Home;
