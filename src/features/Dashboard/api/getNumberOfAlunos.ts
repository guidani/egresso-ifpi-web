import { collection, getDocsFromServer } from "firebase/firestore";
import { db } from "../../../database/firebase/config";

export const getNumberOfAlunos = async (): Promise<number> => {
  try {
    const alunoCollectionRef = collection(db, "ALUNOS");
    const snapshot = await getDocsFromServer(alunoCollectionRef);
    return snapshot.size;
  } catch (error) {
    console.log(error);
    return 0;
  }
};
