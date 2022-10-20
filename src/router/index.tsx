import { Route, Routes } from "react-router-dom";
import CadastroAluno from "../features/CadastroAluno/components/CadastroAluno";
import CadastroCurso from "../features/CadastroCurso/components/CadastroCurso";
import Login from "../features/Login/components/Login";
import Register from "../features/Register/components/Register";
import LoginLayout from "../features/ui/LoginLayout";
import Layout from "../shared/Layout";
import Courses from "../views/Courses";
import Home from "../views/Home";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="cadastro-aluno" element={<CadastroAluno />} />
        <Route path="cadastro-curso" element={<CadastroCurso />} />
        <Route path="listagem-cursos" element={<Courses />} />
      </Route>
      <Route element={<LoginLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
