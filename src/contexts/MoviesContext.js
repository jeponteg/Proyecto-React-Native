import React,{createContext, useState} from 'react'

export const MoviesContex = createContext ();

const MoviesContext = ({children}) => {

    const [movies, setMovies] = useState([])

    return (
        <MoviesContex.Provider
            value = {{
                movies,
                setMovies
            }}
        >
            {children}
        </MoviesContex.Provider>
    ) 
        
};

export default MoviesContext