import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../database/firebase/config";
import useAuth from "../../features/auth/hooks/useAuth";

interface IAlunoSimpleView {
  id: string;
  nome: string;
  email: string;
}

const Egresso = () => {
  const { user } = useAuth();
  const [data, setData] = useState<IAlunoSimpleView[]>([]);

  async function getDataFromCurrentUser() {
    try {
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
    }
  }

  useEffect(() => {
    getDataFromCurrentUser();
  }, []);

  return (
    <>
      {data.length <= 0 ? (
        <div>
          <p>Não foi encontrado nenhum cadastro!</p>
          <br />
          <Link to="cadastro-aluno" className="btn btnPrimary">
            criar novo cadastro
          </Link>
        </div>
      ) : (
        <div>
          {data.map((aluno, index) => {
            return (
              <div key={index}>
                <p>{aluno.nome}</p>
                <p>{aluno.email}</p>
                <br />
                <Link to={`editar-aluno/${aluno.id}`}>
                  <button className="btn btnPrimary">ver cadastro</button>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Egresso;
