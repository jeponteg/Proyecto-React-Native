import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation.js/RootNavigation';
import firebase from './src/utils/firebase' 
import "firebase/auth"
import AuthNavigation from './src/navigation.js/AuthNavigation';
import  MoviesContex  from './src/contexts/MoviesContext';

const App = () => {

  const [user, setUser] = useState(undefined)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) =>{
       setUser(response);
       console.log(response)
    })
  },[]);

 if( user === undefined) return null;
 
 const root = user ? <RootNavigation/> : <AuthNavigation/>

  return (
    
    <NavigationContainer>
      <MoviesContex>
        {root}
      </MoviesContex>
    </NavigationContainer> 
  );
};

export default App;


 

  
 
