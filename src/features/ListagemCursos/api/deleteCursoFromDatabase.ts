import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../database/firebase/config";

export const deleteCursoFromDatabase = async (id: string) => {
  try {
    const cursoRef = await doc(db, "CURSOS", id);
    if (!cursoRef) {
      return false;
    } else {
      await deleteDoc(cursoRef);
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};
