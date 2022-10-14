import { StatusMatriculaAluno, TipoOcupacao } from "../../../types";

export interface IAluno {
  nome: string;
  email: string;
  telefone: number;
  dataDeNascimento: string;
  cpf: string;
  numeroMatricula: string;
  dataDeInicioCurso: string;
  dataDeEncerramentoCurso: string;
  statusDaMatricula: StatusMatriculaAluno | string;
  curso: string;
  tipoDeOcupacao: TipoOcupacao | string;
  localDeTrabalho: string;
  dataDeInicioTrabalho: string;
  dataDeEncerramentoTrabalho: string;
  trabalhoRemunerado: string;
}
