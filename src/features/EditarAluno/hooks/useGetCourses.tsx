import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../database/firebase/config";
import { INewCourse } from "../../ListagemCursos/types/INewCourse";
import { getCursosFromDatabase } from "../api/getCursosFromDatabase";


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
    const unsub = onSnapshot(collection(db, "CURSOS"), (snapshot) => {
      getCursos();
    }, (error) => {
      console.log(error);
    });
    return () => {
      unsub();
    };
  }, []);
  return { courses, loading };
};
