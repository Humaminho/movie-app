import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyArh8Iop9AgyKd7SkFOm7C8PL10Tx04y98',
	authDomain: 'chillandnetflix.netlify.app',
	projectId: 'netflix-blueee',
	storageBucket: 'netflix-blueee.appspot.com',
	messagingSenderId: '808273212835',
	appId: '1:808273212835:web:438ac777ff9691a0131616',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const db = getFirestore();
const colRef = collection(db, 'watchlist');

export { app, auth, provider, db, collection };
