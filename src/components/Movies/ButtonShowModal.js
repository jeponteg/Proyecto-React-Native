import React,{useContext} from 'react'
import { StyleSheet, TouchableHighlight} from 'react-native'
import { MoldalVideoContex } from '../../contexts/MoldalVideoContext'
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
    openButton: {
        borderRadius: 100,
        padding: 10,
        width:70
      },
})

const ButtonShowModal = () => {

const {setModalVisible} = useContext(MoldalVideoContex)

    return (

        <TouchableHighlight
            style={styles.openButton}
            onPress={() => {
            setModalVisible(true);
            }}
       >
        <IconAntDesign name="play" color="white" size={40}/>

      </TouchableHighlight>
    )
}

export default ButtonShowModal

