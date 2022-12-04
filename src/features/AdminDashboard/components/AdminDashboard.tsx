import { Button, Container, Wrap, WrapItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Dashboard from "../../Dashboard";
import "./styles.css";

const AdminDashboard = () => {
  return (
    <>
      <Container minW="full">
        <Wrap>
          <WrapItem>
            <Link to="alunos/cadastro-aluno">
              <Button colorScheme="green" width="full">
                Cadastrar Novo Aluno
              </Button>
            </Link>
          </WrapItem>
          <WrapItem>
            <Link to="cursos/cadastro-curso">
              <Button colorScheme="green" width="full">
                Cadastrar Novo Curso
              </Button>
            </Link>
          </WrapItem>
          <WrapItem>
            <Link to="alunos/listagem-alunos">
              <Button colorScheme="green" width="min-content">
                Ver alunos
              </Button>
            </Link>
          </WrapItem>

          <WrapItem>
            <Link to="cursos/listagem-cursos">
              <Button colorScheme="green">Ver cursos</Button>
            </Link>
          </WrapItem>
        </Wrap>
        <Dashboard />
      </Container>
    </>
  );
};

export default AdminDashboard;
