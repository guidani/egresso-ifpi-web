import { Link } from "react-router-dom";
import ListaAlunos from "../../features/ListagemAlunos/components/ListaAlunos";
import Wrapper from "../../features/ui/wrapper";

const Alunos = () => {
  return (
    <>
      <Wrapper>
        <h2>Alunos cadastrados</h2>
        <Link to="/alunos/cadastro-aluno">
          <button className="btnPrimary">Cadastrar Novo Aluno</button>
        </Link>
        <ListaAlunos />
      </Wrapper>
    </>
  );
};

export default Alunos;
