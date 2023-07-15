import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCj9jV5W-yxi21vHJDJu1IKyDh5LMH4Lj8',
	authDomain: 'bluevies-896b8.firebaseapp.com',
	projectId: 'bluevies-896b8',
	storageBucket: 'bluevies-896b8.appspot.com',
	messagingSenderId: '669434863735',
	appId: '1:669434863735:web:ba8189ae4c5c22d8de2672',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { firebaseConfig, auth };