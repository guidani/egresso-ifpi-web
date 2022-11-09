import { Route, Routes } from "react-router-dom";
import CadastroAluno from "../features/CadastroAluno/components/CadastroAluno";
import CadastroCurso from "../features/CadastroCurso/components/CadastroCurso";
import { EditarCurso } from "../features/EditarCurso/components/EditarCurso";
import ForgotPasswordForm from "../features/ForgotPassword/components/ForgotPasswordForm";
import Login from "../features/Login/components/Login";
import Register from "../features/Register/components/Register";
import AuthLayout from "../features/ui/LoginLayout";
import Layout from "../shared/Layout";
import Alunos from "../views/Alunos";
import Courses from "../views/Courses";
import Home from "../views/Home";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/alunos">
          <Route index path="listagem-alunos" element={<Alunos />} />
          <Route path="cadastro-aluno" element={<CadastroAluno />} />
          <Route
            path="editar-aluno/alunoId"
            element={
              <>
                <h1>Not implemented</h1>
              </>
            }
          />
        </Route>
        <Route path="/cursos">
          <Route index path="listagem-cursos" element={<Courses />} />
          <Route path="cadastro-curso" element={<CadastroCurso />} />
          <Route path="editar-curso/:courseId" element={<EditarCurso />} />
        </Route>
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
      </Route>
    </Routes>
  );
};
