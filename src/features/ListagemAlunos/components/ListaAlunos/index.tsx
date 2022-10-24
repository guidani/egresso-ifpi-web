import { useEffect, useState } from "react";
import { getAlunosFromDatabase } from "../../api/getAlunos";
import "./styles.css";

interface IAlunoSimpleView {
  id: string;
  nome: string;
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
      };
      alunoList.push(newAluno);
      // console.log(newaluno);
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
              <div key={aluno?.id}>
                <p>{aluno.nome}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ListaAlunos;
