import { NivelCurso } from "../../../types";

export interface IFormCadastroCurso {
  courseId: string;
  nomeDoCurso: string;
  nivelDoCurso: NivelCurso | string;
}
