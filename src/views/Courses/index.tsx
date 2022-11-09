import { Link } from "react-router-dom";
import ListagemCursos from "../../features/ListagemCursos/components/ListagemCursos";
import Wrapper from "../../features/ui/wrapper";

const Courses = () => {
  return (
    <>
      <Wrapper>
        <div>Cursos cadastrados</div>
        <Link to="/cursos/cadastro-curso">
          <button className="btnPrimary">Cadastrar Novo Curso</button>
        </Link>
        <ListagemCursos />
      </Wrapper>
    </>
  );
};

export default Courses;
