import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA-xgcWkNDv1IbWyKO5vYcbJeS43qSArj8",
  authDomain: "robinhood-clone-d399e.firebaseapp.com",
  projectId: "robinhood-clone-d399e",
  storageBucket: "robinhood-clone-d399e.appspot.com",
  messagingSenderId: "834629241121",
  appId: "1:834629241121:web:8d16cd92c34b30fc7f5660",
  measurementId: "G-W6QWMFXXRB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };