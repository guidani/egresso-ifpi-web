import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../database/firebase/config";
import useAuth from "../../features/auth/hooks/useAuth";

interface IData {
  id: string;
  nome: string;
}

interface ITemp {
  data: IData[];
}

const Egresso = () => {
  const { user } = useAuth();
  const [data, setData] = useState([]);

  async function getDataFromCurrentUser() {
    try {
      let temp: any[] = [];
      const userid = user.uid;
      const colRef = collection(db, "ALUNOS");
      const q = query(colRef, where("userid", "==", `${userid}`));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) return;
      querySnapshot.forEach((doc) => {
        console.log(
          "🚀 ~ file: index.tsx:21 ~ getDataFromCurrentUser ~ doc",
          doc.data()
        );
        const docData = doc.data();
        const dataVisual = {
          id: doc.id,
          nome: docData.nome,
        };
        temp.push(dataVisual);
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
        <div>Não foi encontrado nenhum cadastro!</div>
      ) : (
        <div>
          {data.map( (item, index) => {
            return (
              <div key={index}>
                <p>{item.nome}</p>
                <br />
                <Link to="#" className="btn btnPrimary">
                  ver cadastro.
                </Link>
              </div>
            )
          })}
        </div>
        
      )}
    </>
  );
};

export default Egresso;
