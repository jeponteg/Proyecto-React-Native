import React,{useState,createContext} from 'react'

export const ProfilePictureContex = createContext();

const ProfilePictureContext = ({children}) => {

    const [photo, setPhoto] = useState(null);

        return (
            <ProfilePictureContex.Provider

                value={{
                    photo, 
                    setPhoto
                }}
            >
                {children}
            </ProfilePictureContex.Provider>

        )

}

export default ProfilePictureContext