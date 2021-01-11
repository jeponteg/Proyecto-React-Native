import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation.js/RootNavigation';
import firebase from './src/utils/firebase' 
import AuthNavigation from './src/navigation.js/AuthNavigation';
import MoviesIdContex  from './src/contexts/MoviesIdContext';
import MoldalVideoContex from './src/contexts/MoldalVideoContext'
import VideoIdContex  from './src/contexts/VideoIdContext';
import "firebase/auth"

const App = () => {

  const [user, setUser] = useState(undefined)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) =>{
       setUser(response);
    })
  },[]);

 if( user === undefined) return null;
 
 const root = user ? <RootNavigation/> : <AuthNavigation/>

  return (
    
    <NavigationContainer>
     
        <MoldalVideoContex>
          <VideoIdContex> 
            <MoviesIdContex>
             
                {root}
              
            </MoviesIdContex>
          </VideoIdContex>
        </MoldalVideoContex>
       
    </NavigationContainer> 
  );
};

export default App;


 

  
 
