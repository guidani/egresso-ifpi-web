import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../database/firebase/config";

export const doUserLogin = async (email: string, password: string) => {
  try {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  } catch (error) {}
};