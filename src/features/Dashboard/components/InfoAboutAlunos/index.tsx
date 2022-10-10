import { useEffect, useState } from "react";
import { getNumberOfAlunos } from "../../api/getNumberOfAlunos";
import "./styles.css";

const InfoAboutAlunos = () => {
  const [numberOfAlunos, setNumberOfAlunos] = useState(0);

  const getQtdAlunos = async () => {
    const qtd = await getNumberOfAlunos();
    setNumberOfAlunos(qtd);
  };

  useEffect(() => {
    getQtdAlunos();
  }, []);
  return <div>Quantidade de alunos: {numberOfAlunos}</div>;
};

export default InfoAboutAlunos;
