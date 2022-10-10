import { Route, Routes } from "react-router-dom";
import Layout from "../shared/Layout";
import CadastroAluno from "../views/CadastroAluno";
import CadastroCurso from "../views/CadastroCurso";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="cadastro-aluno" element={<CadastroAluno/>}/>
        <Route path="cadastro-curso" element={<CadastroCurso/>}/>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
