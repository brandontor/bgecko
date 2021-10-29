import { auth } from "./firebaseInit";
import { GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";


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

// Sign out
export const signOutUser = async () => {
  await signOut(auth)
    .then(() => {
      console.log("User signed out");
    })
    .catch((error) => {
      console.error("There was an error signing out");
    });
};

