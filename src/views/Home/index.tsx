import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <>
    <div className="home-container">


      <Link to="/cadastro-aluno">
        <button className="btn-cadastro-aluno">Cadastrar Novo Aluno</button>
      </Link>
    </div>
    </>
  );
};

export default Home;
