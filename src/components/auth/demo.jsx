import React from 'react';
import { signInAnonymously } from 'firebase/auth';
import { auth } from '../../utils/firebase.config';
import { useNavigate } from 'react-router-dom';

export default function Demo() {
  
  const navigate = useNavigate();

	async function createDemoAccount() {
		try {
			const userCredential = await signInAnonymously(auth);
			navigate('/');
      console.log(userCredential);
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.info(`${errorCode}: ${errorMessage}`);
		}
	}

	return (
		<a onClick={createDemoAccount} className="no-fill-btn">
			Demo
		</a>
	);
}
