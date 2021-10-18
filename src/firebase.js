import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD2nHy4Silzbqz8Kxo9e0v8xutykw5_vSU",
    authDomain: "clone-94001.firebaseapp.com",
    projectId: "clone-94001",
    storageBucket: "clone-94001.appspot.com",
    messagingSenderId: "78753436717",
    appId: "1:78753436717:web:2faf5c6f6a68e097e0d4a4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider}


//   <script type="module">
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyD2nHy4Silzbqz8Kxo9e0v8xutykw5_vSU",
//     authDomain: "clone-94001.firebaseapp.com",
//     databaseURL: "https://clone-94001-default-rtdb.firebaseio.com",
//     projectId: "clone-94001",
//     storageBucket: "clone-94001.appspot.com",
//     messagingSenderId: "78753436717",
//     appId: "1:78753436717:web:2faf5c6f6a68e097e0d4a4"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
// </script>