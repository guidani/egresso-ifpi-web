import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  Link as ChakraLink
} from "@chakra-ui/react";
import { FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ListaAlunos from "../../features/ListagemAlunos/components/ListaAlunos";

const Alunos = () => {
  const navigate = useNavigate()
  return (
    <Container minW="full">
      <Box mb='4'>
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
            Alunos cadastrados
          </Heading>
        </Center>
        <Divider m='4'/>
        <Link to="/administrativo/alunos/cadastro-aluno">
          <Button colorScheme="green" rightIcon={<FaUserPlus />}>
            Cadastrar Novo Aluno
          </Button>
        </Link>
      </Box>
      <ListaAlunos />
    </Container>
  );
};

export default Alunos;
