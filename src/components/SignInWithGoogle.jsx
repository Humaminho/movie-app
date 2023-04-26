import React from 'react';
import { auth, provider } from './firebase-config';
import { signInWithPopup } from 'firebase/auth';

export default function SignInWithGoogle() {

  function handleClick() {
    signInWithPopup(auth, provider)
      .then((cred) => {
        console.log(cred.user);
      })
      .catch((err) => {
        console.info(err);
      })
  }

	return (
    <button className="google" onClick={handleClick}>
      Continue with Google
    </button>
  )
}
