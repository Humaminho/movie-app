import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyCYN9tgHO_sKOKg8qMDWi64CjXHcpI2iGU",
	authDomain: "netflix - bluee.firebaseapp.com",
	projectId: "netflix - bluee",
	storageBucket: "netflix - bluee.appspot.com",
	messagingSenderId: "618983987069",
	appId: "618983987069:web:7942da79e79a1ce48a5e14",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const db = getFirestore();
const colRef = collection(db, 'watchlist');

export { app, auth, provider, db, collection };
