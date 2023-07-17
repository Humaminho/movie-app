import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore, collection, getDocs,
  addDoc,
  doc, getDoc,
  updateDoc
} from 'firebase/firestore'

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

const db = getFirestore();

const collectionRef = collection(db, 'users');

getDocs(collectionRef)
  .then((snapshot) => {
    console.log(snapshot.docs[0].data())
  })
  .catch((err) => {
    console.info(err)
  });

const docRef = doc(db, 'users', '1HdJKcsf9euCeorOQdVU');

getDoc(docRef)
  .then((doc) => {
    console.log(doc.data(), doc.id);
  })

// updateDoc(docRef, {
//   favorite: '[gon, killua]'
// })
//   .then(() => {
//     console.log('changed');
//   })

// addDoc(collectionRef, {
//   players: "['messi','cristiano']"
// })
//   .then(() => {
//     console.log('worked')
//   })

export { firebaseConfig, auth };