import { Box, Link, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const CurrentUserDataNotFound = () => {
  const navigate = useNavigate();
  return (
    <Box>
            <Text>Não foi encontrado nenhum cadastro!</Text>
            <Button
              marginTop="2"
              bg="green.400"
              onClick={() => navigate(`cadastro-aluno`)}
            >
              Adicionar meus dados
            </Button>
          </Box>
  );
};
