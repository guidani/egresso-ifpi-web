import {
  Box,
  Button,
  Flex,
  Text,
  useToast,
  UseToastOptions,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ChakraSpinner } from "../../ui/ChakraSpinner";
import { deleteCursoFromDatabase } from "../api/deleteCursoFromDatabase";
import { getCursosFromDatabase } from "../api/getCursosFromDatabase";
import { INewCourse } from "../types/INewCourse";

const ListagemCursos = () => {
  const [courses, setCourses] = useState<INewCourse[]>([]);
  const [loading, setLoading] = useState(false);
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

  const getCursos = async () => {
    try {
      setLoading(true);
      let courseList: INewCourse[] = [];
      const responseSnapshot = await getCursosFromDatabase();
      responseSnapshot?.forEach((course) => {
        const courseData = course.data();
        const newCourse = {
          id: course.id,
          nome: courseData.nome,
          nivel: courseData.nivel,
          codcurso: courseData.codcurso,
        };
        courseList.push(newCourse);
        setCourses(courseList);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCursos();
  }, []);

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
