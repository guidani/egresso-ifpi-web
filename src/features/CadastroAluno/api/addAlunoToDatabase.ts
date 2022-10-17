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
        numeroMatricula: data.numeroMatricula,
        dataDeInicioCurso: data.dataDeInicioCurso,
        dataDeEncerramentoCurso: data.dataDeEncerramentoCurso,
        statusDaMatricula: data.statusDaMatricula,
        curso: data.curso,
        tipoDeOcupacao: data.tipoDeOcupacao,
        localDeTrabalho: data.localDeTrabalho,
        dataDeInicioTrabalho: data.dataDeInicioTrabalho,
        dataDeEncerramentoTrabalho: data.dataDeEncerramentoTrabalho,
        trabalhoRemunerado: data.trabalhoRemunerado,
      };
  
      const alunoCollectionRef = collection(db, "ALUNOS");
  
      const alunoDocRef = await addDoc(alunoCollectionRef, newAluno);
      console.log("Aluno adicionado com o ID: ", alunoDocRef.id);
    } catch (error) {
      console.log("Algum error aconteceu: ", error);
    }
  };