
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'


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

export { app, auth }