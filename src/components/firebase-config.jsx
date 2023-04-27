import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAMpb0M2PtoWI0FBDnsyLMxlQa7In0RSeY',
	authDomain: 'netflix-blue.firebaseapp.com',
	projectId: 'netflix-blue',
	storageBucket: 'netflix-blue.appspot.com',
	messagingSenderId: '874817663168',
	appId: '1:874817663168:web:5a14a02312d0e202bbbd25',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const db = getFirestore();

// grab collection reference:

const colRef = collection(db, 'watchlist');

export { app, auth, provider, db, collection };
