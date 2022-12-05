import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import ListagemCursos from "../../features/ListagemCursos/components/ListagemCursos";

const Courses = () => {
  const navigate = useNavigate();
  return (
    <Container minW="full">
      <Box>
        <ChakraLink
          borderBottom="2px"
          borderBottomColor="green.400"
          _hover={{ textDecoration: "none" }}
          onClick={() => navigate(-1)}
        >
          voltar
        </ChakraLink>
      </Box>
      <Box mb="4">
        <Center>
          <Heading as="h1" mb="2">
            Cursos cadastrados
          </Heading>
        </Center>
        <Divider m="4" />
        <Link to="/administrativo/cursos/cadastro-curso">
          <Button colorScheme="green">Cadastrar Novo Curso</Button>
        </Link>
      </Box>
      <ListagemCursos />
    </Container>
  );
};

export default Courses;
