import { Link } from "react-router-dom";
import ListaAlunos from "../../features/ListagemAlunos/components/ListaAlunos";
import Wrapper from "../../features/ui/wrapper";

const Alunos = () => {
  return (
    <>
      <Wrapper>
        <h2>Alunos cadastrados</h2>
        <Link to="/administrativo/alunos/cadastro-aluno" className="btnPrimary">
          Cadastrar Novo Aluno
        </Link>
        <ListaAlunos />
      </Wrapper>
    </>
  );
};

export default Alunos;
