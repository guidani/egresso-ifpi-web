import { StatusMatriculaAluno, TipoOcupacao } from "../../../types";

export interface IMatricula {
  numeroMatricula: string;
  dataDeInicioCurso: string;
  dataDeEncerramentoCurso: string;
  statusDaMatricula: StatusMatriculaAluno | string;
  curso: string;
}

export interface IAluno {
  nome: string;
  email: string;
  telefone: string;
  dataDeNascimento: string;
  cpf: string;
  matriculas: IMatricula[];
  tipoDeOcupacao: TipoOcupacao | string;
  localDeTrabalho: string;
  dataDeInicioTrabalho: string;
  dataDeEncerramentoTrabalho: string;
  trabalhoRemunerado: string;
}
