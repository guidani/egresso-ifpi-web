import { useEffect, useState } from "react";
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
        id: alunoData.id,
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
          {alunos.map((aluno) => {
            return (
              <div key={aluno.id}>
                <p>{aluno.nome[0]}</p>
                <p>{aluno.nome}</p>
                <p>{aluno.email}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ListaAlunos;
