import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../database/firebase/config";

export async function updateCourse(id: string, data: any) {
  try {
    const docRef = doc(db, "CURSOS", id);
    await setDoc(docRef, data, {merge: true});
    
  } catch (error) {
    console.log(error);
  }
}
