import firebase from 'firebase/app' 

const firebaseConfig = {
    apiKey: "AIzaSyCmoeH2ukwGRidq_OMJ9OzyzC9GKCh-PUk",
    authDomain: "appmovies-705a7.firebaseapp.com",
    projectId: "appmovies-705a7",
    storageBucket: "appmovies-705a7.appspot.com",
    messagingSenderId: "203845283439",
    appId: "1:203845283439:web:238ab09f5cc73cc136a79a"
  };

  export default firebase.initializeApp(firebaseConfig);