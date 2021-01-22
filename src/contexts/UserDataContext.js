import React,{createContext, useState} from 'react'

export const UserDataContex = createContext();

const UserDataContext = ({children}) => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [phone, setPhone] = useState('')

    return (
        <UserDataContex.Provider
           value={{
                firstname,
                lastname,
                phone,
                setFirstname,
                setLastname,
                setPhone
            }}
        >   
             {children}    
        </UserDataContex.Provider>
    )
}

export default UserDataContext

