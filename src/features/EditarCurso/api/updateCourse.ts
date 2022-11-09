import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../database/firebase/config";

export async function updateCourse(id: string, data: any) {
  try {
    const docRef = doc(db, "CURSOS", id);
    const resp = await setDoc(docRef, data, {merge: true});
    console.log(
      "🚀 ~ file: updateCourse.ts ~ line 8 ~ updateCourse ~ resp",
      resp
    );
  } catch (error) {
    console.log(error);
  }
}
