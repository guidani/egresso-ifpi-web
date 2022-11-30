import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../database/firebase/config";

export async function updateStudent(id: string, data: any) {
  try {
    const docRef = doc(db, "ALUNOS", id);
    await setDoc(docRef, data, { merge: true });
    return true;
  } catch (error) {
    console.log(error);
  }
}
