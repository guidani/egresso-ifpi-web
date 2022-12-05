import { useEffect, useState } from "react";
import { getCursosFromDatabase } from "../api/getCursosFromDatabase";
import { INewCourse } from "../types/INewCourse";

export const useGetCourses = () => {
  const [courses, setCourses] = useState<INewCourse[]>([]);
  const [loading, setLoading] = useState(false);

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
  return { courses, loading };
};
