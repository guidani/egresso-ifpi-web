import {
  Box,
  Button,
  Flex,
  Text,
  useToast,
  UseToastOptions,
} from "@chakra-ui/react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ChakraSpinner } from "../../ui/ChakraSpinner";
import { deleteCursoFromDatabase } from "../api/deleteCursoFromDatabase";
import { useGetCourses } from "../hooks/useGetCourses";

const ListagemCursos = () => {
  const { courses, loading } = useGetCourses();
  const toast = useToast();

  const showToast = (
    title: string,
    status: UseToastOptions["status"],
    description?: string
  ) => {
    return toast({
      title: title,
      description: description,
      status: status,
      duration: 2000,
      isClosable: true,
    });
  };

  const handleDeleteCourse = async (courseid: string) => {
    try {
      await deleteCursoFromDatabase(courseid);
      showToast("Curso deletado", "success");
    } catch (error) {
      if (error) {
        showToast("OPS! Ocorreu m erro.", "info");
      }
    }
  };

  return (
    <>
      {loading ? <ChakraSpinner /> : null}
      {courses.length == 0 ? (
        <p>Nenhum curso cadastrado </p>
      ) : (
        <div>
          {courses.map((item, index) => {
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
                      Curso:{" "}
                    </Text>
                    <Text>{item.nome}</Text>
                  </Flex>
                  <Flex>
                    <Text fontWeight="bold" mr="2">
                      Nível:{" "}
                    </Text>
                    <Text>{item.nivel}</Text>
                  </Flex>
                  <Flex>
                    <Text fontWeight="bold" mr="2">
                      Código:{" "}
                    </Text>
                    <Text>{item.codcurso}</Text>
                  </Flex>
                  <Flex gap={2}>
                    <Link to={`/administrativo/cursos/editar-curso/${item.id}`}>
                      <Button colorScheme="green" rightIcon={<FaEdit />}>
                        Editar
                      </Button>
                    </Link>

                    <Button
                      rightIcon={<FaTrashAlt />}
                      colorScheme="red"
                      onClick={() => handleDeleteCourse(item.id)}
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

export default ListagemCursos;
