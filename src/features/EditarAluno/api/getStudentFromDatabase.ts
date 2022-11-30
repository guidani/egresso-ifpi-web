import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../database/firebase/config";

export async function getStudentFromDatabase(id: string) {
  try {
    const docRef = doc(db, "ALUNOS", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return {};
    }
  } catch (err) {
    console.log(err);
    return;
  }
}
