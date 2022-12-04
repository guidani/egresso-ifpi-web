import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { deleteCursoFromDatabase } from "../api/deleteCursoFromDatabase";
import { getCursosFromDatabase } from "../api/getCursosFromDatabase";
import { INewCourse } from "../types/INewCourse";

const ListagemCursos = () => {
  const [courses, setCourses] = useState<INewCourse[]>([]);

  const getCursos = async () => {
    let courseList: INewCourse[] = [];
    const responseSnapshot = await getCursosFromDatabase();
    responseSnapshot?.forEach((course) => {
      const courseData = course.data();
      const newCourse = {
        id: course.id,
        nome: courseData.nome,
        nivel: courseData.nivel,
      };
      courseList.push(newCourse);
      setCourses(courseList);
    });
  };

  useEffect(() => {
    getCursos();
  }, []);

  return (
    <>
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
                    <Text fontWeight='bold' mr='2'>Curso: </Text>
                    <Text>{item.nome}</Text>
                  </Flex>
                  <Flex>
                    <Text  fontWeight='bold' mr='2'>Nível: </Text>
                    <Text>{item.nivel}</Text>
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
                      onClick={() => deleteCursoFromDatabase(item.id)}
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
