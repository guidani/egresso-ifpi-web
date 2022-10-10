import { collection, getDocs, getDocsFromServer, queryEqual } from "firebase/firestore";
import { db } from "../../../database/firebase/config";

// export const getNumberOfAlunos = async (): Promise<number> => {
//   try {
//     const alunoCollectionRef = await collection(db, "ALUNOS");
//     // alunoCollectionRef.path.length
//     const qtdDocs = alunoCollectionRef.path.length;
//     return qtdDocs;
//   } catch (error) {
//     console.log(error);
//     return 0;
//   }
// };

export const getNumberOfAlunos = async (): Promise<number> => {
    try {
      const alunoCollectionRef = collection(db, "ALUNOS");
      const snapshot = await getDocsFromServer(alunoCollectionRef)
      return snapshot.size
    } catch (error) {
      console.log(error);
      return 0;
    }
  };
  