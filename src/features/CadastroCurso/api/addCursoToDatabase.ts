import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../database/firebase/config";
import { ICurso } from "../../../types";

export const addCursoToDatabase = async (data: ICurso) => {
  try {
    const newCurso: ICurso = {
      nome: data.nome,
      nivel: data.nivel,
      codcurso: data.codcurso
    };

    const cursoCollectionRef = collection(db, "CURSOS");
    await addDoc(cursoCollectionRef, newCurso);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
