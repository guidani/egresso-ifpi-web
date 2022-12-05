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
import { BackButton } from "../../features/ui/BackButton";

const Alunos = () => {
  const navigate = useNavigate()
  return (
    <Container minW="full">
      <BackButton/>
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
