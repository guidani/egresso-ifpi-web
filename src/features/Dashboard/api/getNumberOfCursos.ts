import { collection, getDocsFromServer } from "firebase/firestore";
import { db } from "../../../database/firebase/config";

export const getNumberOfCursos = async (): Promise<number> => {
  try {
    const cursoCollectionRef = collection(db, "CURSOS");
    const snapshot = await getDocsFromServer(cursoCollectionRef);
    return snapshot.size;
  } catch (error) {
    console.log(error);
    return 0;
  }
};
