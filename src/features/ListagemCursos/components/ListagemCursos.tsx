import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICurso } from "../../../types";
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
                <p>{item.nome}</p>
                <p>{item.nivel}</p>
                <div className="btnRow">
                  <Link to={`/administrativo/cursos/editar-curso/${item.id}`}>
                    <button className="btnPrimary">Editar</button>
                  </Link>

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
