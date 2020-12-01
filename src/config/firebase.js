import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-3YhDVfi5lbJ1HQp6nKn3VauERcweSlY",
  authDomain: "graduateapp-13461.firebaseapp.com",
  databaseURL: "https://graduateapp-13461.firebaseio.com",
  projectId: "graduateapp-13461",
  storageBucket: "graduateapp-13461.appspot.com",
  messagingSenderId: "145872832838",
  appId: "1:145872832838:web:f4bc7b025f333f70733d47",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
