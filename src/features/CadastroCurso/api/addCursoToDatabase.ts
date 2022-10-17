import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../database/firebase/config";
import { IFormCadastroCurso } from "../types/IFormCadastroAluno";

export const addCursoToDatabase = async (data: IFormCadastroCurso) => {
    try {
      const newCurso: IFormCadastroCurso = {
        nomeDoCurso: data.nomeDoCurso,
        nivelDoCurso: data.nivelDoCurso,
      };
  
      const cursoCollectionRef = collection(db, "CURSOS");
      const cursoDocRef = await addDoc(cursoCollectionRef, newCurso);
      console.log("Curso adicionado com o ID: ", cursoDocRef.id);
    } catch (error) {
      console.log("Algo de errado aconteceu...", error);
    }
  };
  