import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { deleteStudentFromDatabase } from "../../api/deleteStudentFromDatabase";
import { getAlunosFromDatabase } from "../../api/getAlunos";
import "./styles.css";

interface IAlunoSimpleView {
  id: string;
  nome: string;
  email: string;
}

const ListaAlunos = () => {
  const [alunos, setAlunos] = useState<IAlunoSimpleView[]>([]);

  const getAlunos = async () => {
    let alunoList: IAlunoSimpleView[] = [];
    const responseSnapshot = await getAlunosFromDatabase();
    responseSnapshot?.forEach((aluno) => {
      const alunoData = aluno.data();
      const newAluno = {
        id: aluno.id,
        nome: alunoData.nome,
        email: alunoData.email,
      };
      alunoList.push(newAluno);
      setAlunos(alunoList);
    });
  };

  useEffect(() => {
    getAlunos();
  }, []);
  return (
    <>
      {!alunos ? (
        <p>Não há nenhum aluno cadastrado</p>
      ) : (
        <div>
          {alunos.map((aluno, index) => {
            return (
              <div key={index}>
                <Box
                  mb="2"
                  rounded="md"
                  border="1px"
                  borderColor="gray.400"
                  p="2"
                >
                  <Flex>
                    <Text fontWeight="bold" mr="2">
                      Nome:{" "}
                    </Text>
                    <Text>{aluno.nome}</Text>
                  </Flex>
                  <Flex>
                    <Text fontWeight="bold" mr="2">
                      E-mail:
                    </Text>
                    <Text>{aluno.email}</Text>
                  </Flex>
                  <Flex gap={2}>
                    <Link
                      to={`/administrativo/alunos/editar-aluno/${aluno.id}`}
                    >
                      <Button colorScheme="green" rightIcon={<FaUserEdit />}>
                        Editar
                      </Button>
                    </Link>

                    <Button
                      colorScheme="red"
                      rightIcon={<FaTrashAlt />}
                      onClick={() => deleteStudentFromDatabase(aluno.id)}
                    >
                      Deletar
                    </Button>
                  </Flex>
                </Box>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ListaAlunos;
