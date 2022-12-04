import { Box, Button, Center, Container, Divider, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ListagemCursos from "../../features/ListagemCursos/components/ListagemCursos";

const Courses = () => {
  return (
    <>
      <Container minW="full">
        <Box mb="4">
          <Center>
            <Heading as="h1" mb="2">
              Cursos cadastrados
            </Heading>
          </Center>
          <Divider/>
          <Link to="/administrativo/cursos/cadastro-curso">
            <Button colorScheme="green">Cadastrar Novo Curso</Button>
          </Link>
        </Box>
        <ListagemCursos />
      </Container>
    </>
  );
};

export default Courses;
