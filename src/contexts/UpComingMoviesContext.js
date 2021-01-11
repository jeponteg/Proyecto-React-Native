import React,{createContext,useState} from 'react'

export const UpComingMoviesContex = createContext ();

const UpComingMoviesContext = ({children}) => {
    
    const [movies, setMovies] = useState(null)

    return (
        <UpComingMoviesContex.Provider
            value = {{
                movies,
                setMovies
            }}
        >
            {children}
        </UpComingMoviesContex.Provider>
    )
}

export default UpComingMoviesContext


