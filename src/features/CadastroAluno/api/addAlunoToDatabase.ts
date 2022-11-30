import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../database/firebase/config";
import { IAluno } from "../types/IAluno";

export const addAlunoToDatabase = async (data: IAluno) => {
    try {
      const newAluno: IAluno = {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        dataDeNascimento: data.dataDeNascimento,
        cpf: data.cpf,
        matriculas: data.matriculas,
        tipoDeOcupacao: data.tipoDeOcupacao,
        localDeTrabalho: data.localDeTrabalho,
        dataDeInicioTrabalho: data.dataDeInicioTrabalho,
        dataDeEncerramentoTrabalho: data.dataDeEncerramentoTrabalho,
        trabalhoRemunerado: data.trabalhoRemunerado,
      };
  
      const alunoCollectionRef = collection(db, "ALUNOS");
  
      await addDoc(alunoCollectionRef, newAluno);
      return true;
    } catch (error) {
      console.log(error);
    }
  };