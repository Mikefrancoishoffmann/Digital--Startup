import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyCjSdr29PAhsmIhBWw1lesZ1YRyVcFzc4c",
    authDomain: "my-firebase-project-8d953.firebaseapp.com",
    databaseURL: "https://my-firebase-project-8d953.firebaseio.com",
    projectId: "my-firebase-project-8d953",
    storageBucket: "my-firebase-project-8d953.appspot.com",
    messagingSenderId: "120952579039",
    appId: "1:120952579039:web:052885e6c6fc5a597cda6a"
  })
  .firestore()

export const postRef = db.collection('posts')
