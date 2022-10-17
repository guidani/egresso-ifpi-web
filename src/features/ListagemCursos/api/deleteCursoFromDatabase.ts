import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../database/firebase/config";

export const deleteCursoFromDatabase = async (id: string) => {
  try {
    const cursoRef = await doc(db, "CURSOS", id);
    if (!cursoRef) {
      console.log("Curso não encontrado!");
    } else {
      await deleteDoc(cursoRef);
      console.log("Curso deletado");
    }
  } catch (error) {
    console.log(error);
  }
};
