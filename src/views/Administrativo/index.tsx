import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { db } from "../../database/firebase/config";
import useAuth from "../../features/auth/hooks/useAuth";

const Administrativo = () => {
  // const { user } = useAuth();
  // // const [isUserAdmin, setIsUserAdmin] = useState(false);

  // async function isAdmin() {
  //   const userId = user.uid;
  //   console.log(userId);
  //   //
  //   const docRef = doc(db, "admins", `${userId}`);
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     console.log("Data: ", docSnap.data());
  //     // setIsUserAdmin(true);
  //     return true;
  //   } else {
  //     console.log("Documento não existe.");
  //     // setIsUserAdmin(false);
  //     return false;
  //   }
  // }

  // useEffect(() => {
  //   isAdmin();
  // }, []);
  

  return <Outlet />;
};

export default Administrativo;
