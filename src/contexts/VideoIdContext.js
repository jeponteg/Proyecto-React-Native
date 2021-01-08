import React,{createContext,useState} from 'react'

export const VideoIdContex = createContext ();

const VideoIdContext = ({children}) => {

    const [video, setVideo] = useState([])

    return (
        <VideoIdContex.Provider
            value = {{
                video,
                setVideo
            }}
        >
            {children}
        </VideoIdContex.Provider>
    ) 
}

export default VideoIdContext

