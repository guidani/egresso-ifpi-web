import { Box, Button, Container, Link, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../ui/BackButton";

import { ChakraSpinner } from "../../ui/ChakraSpinner";
import { useGetDataFromCurrentUser } from "../hooks/useGetDataFromCurrentUser";
import { CurrentUserDataNotFound } from "./CurrentUserDataNotFound";

export const EgressoDashboard = () => {
  const { data, loading } = useGetDataFromCurrentUser();

  const navigate = useNavigate();

  return (
    <>
      <Container minW="full">
        <BackButton/>
        {loading ? (
          <ChakraSpinner />
        ) : data.length <= 0 ? (
          <CurrentUserDataNotFound />
        ) : (
          <Box>
            {data.map((aluno, index) => {
              return (
                <Box
                  key={index}
                  border="1px"
                  rounded="md"
                  borderColor="gray.400"
                  p="2"
                >
                  <Box display="flex">
                    <Text fontWeight="black" marginRight="2">
                      Nome:{" "}
                    </Text>
                    <p>{aluno.nome}</p>
                  </Box>
                  <Box display="flex" marginTop="2">
                    <Text fontWeight="black" marginRight="2">
                      Email:{" "}
                    </Text>
                    <p>{aluno.email}</p>
                  </Box>

                  <Button
                    marginTop="2"
                    bg="green.400"
                    onClick={() => navigate(`editar-aluno/${aluno.id}`)}
                  >
                    Ver Cadastro
                  </Button>
                </Box>
              );
            })}
          </Box>
        )}
      </Container>
    </>
  );
};
