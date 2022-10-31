import { useEffect, useState } from "react";
import { ICurso } from "../../../types";
import { deleteCursoFromDatabase } from "../api/deleteCursoFromDatabase";
import { getCursosFromDatabase } from "../api/getCursosFromDatabase";

const ListagemCursos = () => {
  const [courses, setCourses] = useState<ICurso[]>([]);

  const getCursos = async () => {
    let courseList: ICurso[] = [];
    const responseSnapshot = await getCursosFromDatabase();
    responseSnapshot?.forEach((course) => {
      const courseData = course.data();
      const newCourse = {
        id: courseData.id,
        nome: courseData.nomeDoCurso,
        nivel: courseData.nivelDoCurso,
      };
      courseList.push(newCourse);
      // console.log(newCourse);
      setCourses(courseList);
    });
  };

  useEffect(() => {
    getCursos();
  }, []);

  return (
    <>
      {!courses ? (
        <p>Nenhum curso cadastrado </p>
      ) : (
        <div>
          {courses?.map((item) => {
            return (
              <div key={item?.id}>
                <p>{item?.nome}</p>
                <p>{item?.nivel}</p>
                <div className="btnRow">
                <button className="btnPrimary">Editar</button>
                <button
                  className="btnDanger"
                  onClick={() => deleteCursoFromDatabase(item.id)}
                >
                  Deletar
                </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ListagemCursos;
