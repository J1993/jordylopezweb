import firebase from "firebase/app";
import "firebase/firestore";

  // Initialize Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyCpcS9oPvLN7LpzZVSF9oxpQVt_9BHXkUU",
    authDomain: "shoppinglist-react.firebaseapp.com",
    databaseURL: "https://shoppinglist-react.firebaseio.com",
    projectId: "shoppinglist-react",
    storageBucket: "shoppinglist-react.appspot.com",
    messagingSenderId: "407226271621",
    appId: "1:407226271621:web:220f764c4073c23dad26ec"
  });

  const dataBase = firebase.firestore();

  export default dataBase;