import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../auth/hooks/useAuth";

const PublicRoutes = () => {
  const { user } = useAuth();

  if (user) return <Navigate to="/home" replace />;

  return <Outlet />;
};

export default PublicRoutes;
