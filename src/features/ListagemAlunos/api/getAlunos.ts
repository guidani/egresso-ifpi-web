import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../database/firebase/config";

export const getAlunos = async () => {
  try {
    let alunosLista = [];
    const alunosSnapshot = await getDocs(collection(db, "ALUNOS"));
    alunosSnapshot.forEach((aluno) => {
      const alunoData = aluno.data();
      console.log(alunoData);
    });
  } catch (error) {
    // TODO: fazer tratamento de erros
    console.log(error);
  }
};
