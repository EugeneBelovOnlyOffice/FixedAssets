import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {getFirestore} from 'firebase/firestore'
import {getAuth} from'firebase/auth'
import { initializeApp } from "firebase/app";



// Initialize Firebase
const firebase = initializeApp({
    apiKey: "AIzaSyA9Dddkvnkci9rwTeuc3XkpZx8zTcoVwPU",
    authDomain: "fa-react-ccb7e.firebaseapp.com",
    projectId: "fa-react-ccb7e",
    storageBucket: "fa-react-ccb7e.appspot.com",
    messagingSenderId: "1006667397553",
    appId: "1:1006667397553:web:a5bca8c4ac072d9d0da590",
    measurementId: "G-VDXT891RQ7"
});
export const Context = createContext(null)
const auth = getAuth(firebase)
const firestore= getFirestore(firebase)




ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value={{firebase,firestore,auth}}>
    <App />
          </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

