import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC9LPY_0ROZQln4sAdcBAzwcy66__yLqzY',
  authDomain: 'music-1514f.firebaseapp.com',
  projectId: 'music-1514f',
  storageBucket: 'music-1514f.appspot.com',
  messagingSenderId: '428189984029',
  appId: '1:428189984029:web:658bea203cfe56b2caadf4',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection,
};
