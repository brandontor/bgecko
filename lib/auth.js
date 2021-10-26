import { auth } from "./firebaseInit";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";


// Sign in with popup && Google as the provider
const googleProvider = new GoogleAuthProvider();

export const googleSignIn = async () => {
  await signInWithPopup(auth, googleProvider)
    .then((user) => {
      console.log(user);
      console.log(signedIn);
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

//Auth state change
export let signedIn = false;

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    signedIn = true;
  } else {
    // No user signed in
    signedIn = false;
  }
});

console.log(signedIn)