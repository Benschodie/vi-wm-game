import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBCiJdFLQpo_RSfVswrTtnXjE1Z1ekywyQ",
  authDomain: "wm-game-3a8e5.firebaseapp.com",
  databaseURL: "https://wm-game-3a8e5.firebaseio.com",
  projectId: "wm-game-3a8e5",
  storageBucket: "wm-game-3a8e5.appspot.com",
  messagingSenderId: "939762689572"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()
