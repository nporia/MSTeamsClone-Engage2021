import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyB_TRLHQFFw41cqUcQEaAt52q85VKAcLhc",
  authDomain: "clone-9654b.firebaseapp.com",
  projectId: "clone-9654b",
  storageBucket: "clone-9654b.appspot.com",
  messagingSenderId: "1078308064441",
  appId: "1:1078308064441:web:72a7844dc7c8019cbd1f68"
}).auth()
