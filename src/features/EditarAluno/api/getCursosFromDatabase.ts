import { collection, DocumentData, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "../../../database/firebase/config";

export const getCursosFromDatabase = async (): Promise<QuerySnapshot<DocumentData> | null> => {
  try {
    const cursoCollectionRef = collection(db, "CURSOS");
    const snapshot = await getDocs(cursoCollectionRef);
    return snapshot;
  } catch (error) {
    console.log(error);
    return null;
  }
};
