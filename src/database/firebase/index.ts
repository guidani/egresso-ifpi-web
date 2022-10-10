import { addDoc, collection } from "firebase/firestore";
import { IFormCadastroAluno } from "../../views/CadastroAluno";
import { db } from "./config";

export const addAlunoToDatabase = async (data: IFormCadastroAluno) => {
  try {
    const newAluno: IFormCadastroAluno = {
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
