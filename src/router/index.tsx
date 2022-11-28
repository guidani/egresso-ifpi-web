import { Route, Routes } from "react-router-dom";
import App from "../App";
import AdminDashboard from "../features/AdminDashboard/components/AdminDashboard";
import ForgotPasswordForm from "../features/auth/ForgotPassword/components/ForgotPasswordForm";
import Login from "../features/auth/Login/components/Login";
import Register from "../features/auth/Register/components/Register";
import { RequireAuth } from "../features/auth/RequireAuth";
import CadastroAluno from "../features/CadastroAluno/components/CadastroAluno";
import CadastroCurso from "../features/CadastroCurso/components/CadastroCurso";
import EditarAluno from "../features/EditarAluno/components/EditarAluno";
import { EditarCurso } from "../features/EditarCurso/components/EditarCurso";
import PublicRoutes from "../features/ui/PublicRoutes";
import Layout from "../shared/Layout";
import Administrativo from "../views/Administrativo";
import Alunos from "../views/Alunos";
import Courses from "../views/Courses";
import Egresso from "../views/Egresso";
import Home from "../views/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        {/* Rotas publicas */}
        <Route element={<PublicRoutes />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPasswordForm />} />
        </Route>
        {/* Rotas privadas */}
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="egresso" element={<Egresso />} />
            <Route path="administrativo/" element={<Administrativo />}>
              <Route index element={<AdminDashboard />} />
              <Route path="alunos/listagem-alunos" element={<Alunos />} />
              <Route path="alunos/cadastro-aluno" element={<CadastroAluno />} />
              <Route
                path="alunos/editar-aluno/:studentId"
                element={<EditarAluno />}
              />
              <Route path="cursos/listagem-cursos" element={<Courses />} />
              <Route path="cursos/cadastro-curso" element={<CadastroCurso />} />
              <Route
                path="cursos/editar-curso/:courseId"
                element={<EditarCurso />}
              />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
