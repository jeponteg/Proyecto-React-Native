import React,{useState,createContext} from 'react'

export const MoldalVideoContex = createContext();

const MoldalVideoContext = ({children}) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <MoldalVideoContex.Provider
            value={{
                modalVisible, 
                setModalVisible
            }}
        >
            {children}
        </MoldalVideoContex.Provider>
    )
}

export default MoldalVideoContext

