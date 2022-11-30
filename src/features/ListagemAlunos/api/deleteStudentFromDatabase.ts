import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../database/firebase/config";

export const deleteStudentFromDatabase = async (id: string) => {
  try {
    const studentRef = await doc(db, "ALUNOS", id);
    if (!studentRef) {
      return false;
    } else {
      await deleteDoc(studentRef);
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};
