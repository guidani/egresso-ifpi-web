import { collection, query, where, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../database/firebase/config';
import useAuth from '../../auth/hooks/useAuth';
import { IAlunoSimpleView } from '../types/IAlunoSimpleView';

export const useGetDataFromCurrentUser = () => {
  const { user } = useAuth();
  const [data, setData] = useState<IAlunoSimpleView[]>([]);
  const [loading, setLoading] = useState(false);
  async function getDataFromCurrentUser() {
    try {
      setLoading(true);
      let temp: IAlunoSimpleView[] = [];
      const userid = user.uid;
      const colRef = collection(db, "ALUNOS");
      const q = query(colRef, where("userid", "==", `${userid}`));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) return;
      querySnapshot.forEach((doc) => {
        const alunoData = doc.data();
        const newAluno = {
          id: doc.id,
          nome: alunoData.nome,
          email: alunoData.email,
        };
        temp.push(newAluno);
        setData(temp);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDataFromCurrentUser();
  }, []);
  return {data, loading}
}
