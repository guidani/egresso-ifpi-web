import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../database/firebase/config";

export async function updateStudent(id: string, data: any) {
  try {
    const docRef = doc(db, "ALUNOS", id);
    const resp = await setDoc(docRef, data, { merge: true });
    console.log(
      "🚀 ~ file: updateCourse.ts ~ line 8 ~ updateCourse ~ resp",
      resp
    );
  } catch (error) {
    console.log(error);
  }
}
