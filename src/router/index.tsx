import { Route, Routes } from "react-router-dom";
import Layout from "../shared/Layout";
import CadastroAluno from "../views/CadastroAluno";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="cadastro-aluno" element={<CadastroAluno/>}/>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
