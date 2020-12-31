import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation.js/RootNavigation';
import firebase from './src/utils/firebase' 
import "firebase/auth"
import AuthNavigation from './src/navigation.js/AuthNavigation';

const App = () => {

  const [user, setUser] = useState(undefined)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) =>{
       setUser(response);
       console.log(response)
    })
  },[]);

 if( user === undefined) return null;

  return (
    <NavigationContainer>
      {user ? <RootNavigation/> : <AuthNavigation/>}
    </NavigationContainer>
  );
};

export default App;


 

  
 
