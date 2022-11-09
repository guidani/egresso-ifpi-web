import { Link } from "react-router-dom";
import ListagemCursos from "../../features/ListagemCursos/components/ListagemCursos";
import Wrapper from "../../features/ui/wrapper";

const Courses = () => {
  return (
    <>
      <Wrapper>
        <h1>Cursos cadastrados</h1>
        <Link to="/cursos/cadastro-curso">
          <button className="btnPrimary">Cadastrar Novo Curso</button>
        </Link>
        <br />
        <br /><br />
        <ListagemCursos />
      </Wrapper>
    </>
  );
};

export default Courses;
