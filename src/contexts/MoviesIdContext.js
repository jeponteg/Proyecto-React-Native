import React,{createContext,useState} from 'react'

export const MoviesIdContex = createContext ();

const MoviesIdContext = ({children}) => {

    const [idmovies, setIdmovies] = useState(null)

    return (
        <MoviesIdContex.Provider
            value = {{
                idmovies,
                setIdmovies
            }}
        >
            {children}
        </MoviesIdContex.Provider>
    ) 
}

export default MoviesIdContext


