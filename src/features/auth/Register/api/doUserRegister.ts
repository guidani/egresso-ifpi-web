import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../database/firebase/config";

export const doUserRegister = async (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({ Code: errorCode, Message: errorMessage });
      // ..
    });
};
