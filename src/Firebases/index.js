import firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDlhudSEB1l3vESorw_yoHMr3-ERzOpOnw",
  authDomain: "cnpm-e5af3.firebaseapp.com",
  projectId: "cnpm-e5af3",
  storageBucket: "cnpm-e5af3.appspot.com",
  messagingSenderId: "61202601599",
  appId: "1:61202601599:web:0a991389f99f90bbdb114a",
  measurementId: "G-L29BYXR7X4"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()
export { storage, firebase as fire }
