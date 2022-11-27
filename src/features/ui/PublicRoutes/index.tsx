import { Outlet } from "react-router-dom";

const PublicRoutes = () => {
  // const { user } = useUserAuth();

  // if (user) return <Navigate to="/dashboard" replace />;

  return <Outlet />;
};

export default PublicRoutes;
