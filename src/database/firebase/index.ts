import { addDoc, collection } from "firebase/firestore";
import { IFormCadastroAluno } from "../../features/CadastroAluno";
import { IFormCadastroCurso } from "../../features/CadastroCurso";
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
