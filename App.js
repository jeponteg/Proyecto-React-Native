import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation.js/RootNavigation';
import firebase from './src/utils/firebase' 
import "firebase/auth"
import AuthNavigation from './src/navigation.js/AuthNavigation';
import MoviesContex from './src/contexts/MoviesContext';
import MoviesIdContex  from './src/contexts/MoviesIdContext';
import MoldalVideoContex from './src/contexts/MoldalVideoContext'
import VideoIdContex  from './src/contexts/VideoIdContext';
import UpComingMoviesContex  from './src/contexts/UpComingMoviesContext';

UpComingMoviesContex

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
      <UpComingMoviesContex>  
        <MoldalVideoContex>
          <VideoIdContex> 
            <MoviesIdContex>
              <MoviesContex>
                {root}
              </MoviesContex>
            </MoviesIdContex>
          </VideoIdContex>
        </MoldalVideoContex>
      </UpComingMoviesContex>     
    </NavigationContainer> 
  );
};

export default App;


 

  
 
