import { Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const RequireAuth = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) return <Navigate to="/" replace />;

  return (
    <>
      <Outlet />
    </>
  );
};
