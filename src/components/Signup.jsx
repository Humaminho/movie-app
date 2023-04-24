import React, { useState } from 'react'
import './styles/Signup.css'
import { app, auth } from './firebase-config.jsx'
import { createUserWithEmailAndPassword as createUser} from 'firebase/auth'

export default function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  function handleSignup(e) {
    e.preventDefault();
    createUser(auth, email, password)
      .then((cred) => {
        console.log('User created', cred.user);
        setEmail('');
        setPassword('');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
		<form className="login-form">
			<label htmlFor="email">
				<p className="label">Email:</p>
				<input
					className="login-input"
					type="email"
					name="email"
					id="email"
					onChange={(e) => setEmail(e.target.value)}
          value={email}
				/>
			</label>
			<label htmlFor="password">
				<p className="label">Password:</p>
				<input
					className="login-input"
					type="password"
					name="password"
					id="password"
					onChange={(e) => setPassword(e.target.value)}
          value={password}
				/>
			</label>
			<button onClick={handleSignup} className="Sign-up">
				Sign-up
			</button>
		</form>
  );
}
