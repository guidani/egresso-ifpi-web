import { Outlet } from "react-router-dom";

export const RequireAuth = () => {
  // const { logOut, user } = useUserAuth();
  // const navigate = useNavigate();

  // const handleLogOut = async () => {
  //   try {
  //     await logOut();
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // if (!user) return <Navigate to="/" replace />;

  return (
    <>
      {/* <Navbar handleLogOut={handleLogOut} user={user} /> */}
      <Outlet />
    </>
  );
};
