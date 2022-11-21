import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteStudentFromDatabase } from "../../api/deleteStudentFromDatabase";
import { getAlunosFromDatabase } from "../../api/getAlunos";
import "./styles.css";

interface IAlunoSimpleView {
  id: string;
  nome: string;
  email: string;
}

const ListaAlunos = () => {
  const [alunos, setAlunos] = useState<IAlunoSimpleView[]>([]);

  const getAlunos = async () => {
    let alunoList: IAlunoSimpleView[] = [];
    const responseSnapshot = await getAlunosFromDatabase();
    responseSnapshot?.forEach((aluno) => {
      const alunoData = aluno.data();
      const newAluno = {
        id: aluno.id,
        nome: alunoData.nome,
        email: alunoData.email,
      };
      alunoList.push(newAluno);
      setAlunos(alunoList);
    });
  };

  useEffect(() => {
    getAlunos();
  }, []);
  return (
    <>
      {!alunos ? (
        <p>Não há nenhum aluno cadastrado</p>
      ) : (
        <div>
          {alunos.map((aluno, index) => {
            return (
              <div key={index}>
                <p>{aluno.id}</p>
                <p>{aluno.nome}</p>
                <p>{aluno.email}</p>
                <div className="btnRow">
                  <Link to={`editar-aluno/${aluno.id}`}>
                    <button className="btnPrimary">Editar</button>
                  </Link>

                  <button
                    className="btnDanger"
                    onClick={() => deleteStudentFromDatabase(aluno.id)}
                  >
                    Deletar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ListaAlunos;
