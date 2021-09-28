import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyABstmQfSJl_EiQUztWbOuKGFZPs0KMehM",
  authDomain: "project-71-ab82d.firebaseapp.com",
  projectId: "project-71-ab82d",
  storageBucket: "project-71-ab82d.appspot.com",
  messagingSenderId: "552017825932",
  appId: "1:552017825932:web:106da3776a03c9bf0eeba9"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

