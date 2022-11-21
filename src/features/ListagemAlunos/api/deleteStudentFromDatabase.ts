import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../database/firebase/config";

export const deleteStudentFromDatabase = async (id: string) => {
  try {
    const studentRef = await doc(db, "ALUNOS", id);
    if (!studentRef) {
      console.log("Aluno não encontrado!");
    } else {
      await deleteDoc(studentRef);
      console.log("Aluno deletado");
    }
  } catch (error) {
    console.log(error);
  }
};
