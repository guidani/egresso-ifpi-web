import { useEffect, useState } from "react";
import { getNumberOfAlunos } from "../../api/getNumberOfAlunos";
import { getNumberOfCursos } from "../../api/getNumberOfCursos";
import "./styles.css";

const InfoAboutCursos = () => {
  const [numberOfCursos, setNumberOfCursos] = useState(0);

  const getQtdCursos = async () => {
    const qtd = await getNumberOfCursos();
    setNumberOfCursos(qtd);
  };

  useEffect(() => {
    getQtdCursos();
  }, []);
  return <div>Quantidade de cursos: {numberOfCursos}</div>;
};

export default InfoAboutCursos;
