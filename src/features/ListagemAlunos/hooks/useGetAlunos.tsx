import React, { useEffect, useState } from 'react'
import { getAlunosFromDatabase } from '../api/getAlunos';
import { IAlunoSimpleView } from '../types/IAlunoSimpleView';

export const useGetAlunos = () => {
  const [alunos, setAlunos] = useState<IAlunoSimpleView[]>([]);
  const [loading, setLoading] = useState(false);

  const getAlunos = async () => {
    try {
      setLoading(true)
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
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
    
  };

  useEffect(() => {
    getAlunos();
  }, []);
  return {alunos, loading}
}
