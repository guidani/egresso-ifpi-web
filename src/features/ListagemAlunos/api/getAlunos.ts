import {
  collection,
  DocumentData,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "../../../database/firebase/config";

export const getAlunosFromDatabase =
  async (): Promise<QuerySnapshot<DocumentData> | null> => {
    try {
      const alunoCollectionRef = collection(db, "ALUNOS");
      const snapshot = await getDocs(alunoCollectionRef);
      return snapshot;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
