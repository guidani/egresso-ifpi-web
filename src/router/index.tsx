import { Route, Routes } from "react-router-dom";
import CadastroAluno from "../features/CadastroAluno/components/CadastroAluno";
import CadastroCurso from "../features/CadastroCurso/components/CadastroCurso";
import Layout from "../shared/Layout";
import Home from "../views/Home";
import Login from "../features/Login/components/Login";
import Register from "../features/Register/components/Register";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="cadastro-aluno" element={<CadastroAluno />} />
        <Route path="cadastro-curso" element={<CadastroCurso />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
