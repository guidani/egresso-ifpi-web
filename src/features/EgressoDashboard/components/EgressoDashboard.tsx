import { Box, Button, Container, Link, Text } from "@chakra-ui/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { db } from "../../../database/firebase/config";
import useAuth from "../../auth/hooks/useAuth";
import { ChakraSpinner } from "../../ui/ChakraSpinner";

interface IAlunoSimpleView {
  id: string;
  nome: string;
  email: string;
}

export const EgressoDashboard = () => {
  const { user } = useAuth();
  const [data, setData] = useState<IAlunoSimpleView[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function getDataFromCurrentUser() {
    try {
      setLoading(true);
      let temp: IAlunoSimpleView[] = [];
      const userid = user.uid;
      const colRef = collection(db, "ALUNOS");
      const q = query(colRef, where("userid", "==", `${userid}`));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) return;
      querySnapshot.forEach((doc) => {
        const alunoData = doc.data();
        const newAluno = {
          id: doc.id,
          nome: alunoData.nome,
          email: alunoData.email,
        };
        temp.push(newAluno);
        setData(temp);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDataFromCurrentUser();
  }, []);

  return (
    <>
      <Container minW="full">
        <Box mb='4'>
          <Link
            borderBottom="2px"
            borderBottomColor="green.400"
            _hover={{ textDecoration: "none" }}
            onClick={() => navigate(-1)}
          >
            voltar
          </Link>
        </Box>
        {loading ? (
          <ChakraSpinner />
        ) : data.length <= 0 ? (
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

        {}
      </Container>
    </>
  );
};
