import { auth } from "./firebaseInit";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Sign in with popup && Google as the provider
const googleProvider = new GoogleAuthProvider();

export const googleSignIn = async () => {
  await signInWithPopup(auth, googleProvider)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
    });
};
