import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../database/firebase/config";
import { ICurso } from "../../../types";

export const addCursoToDatabase = async (data: ICurso) => {
  try {
    const newCurso: ICurso = {
      nome: data.nome,
      nivel: data.nivel,
    };

    const cursoCollectionRef = collection(db, "CURSOS");
    const cursoDocRef = await addDoc(cursoCollectionRef, newCurso);
    console.log("Curso adicionado com o ID: ", cursoDocRef.id);
  } catch (error) {
    console.log("Algo de errado aconteceu...", error);
  }
};
