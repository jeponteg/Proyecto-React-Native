import React, {useContext} from 'react'
import { Modal, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { MoldalVideoContex } from '../../contexts/MoldalVideoContext'
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { WebView } from 'react-native-webview';
import { VideoIdContex } from '../../contexts/VideoIdContext';


const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      justifyContent:'flex-end',
      width:'100%',
      height:'100%',
      margin: 20,
      backgroundColor: "black",
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      borderRadius: 20,
      padding: 10,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    video:{
      alignSelf:'stretch',
      height:300
    }
  });
  
const ModalVideo = () => {
  
    const {modalVisible, setModalVisible} = useContext(MoldalVideoContex)
    const {video, setVideo} = useContext(VideoIdContex)
    return (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <WebView
                style={{width:500,}} 
                source={{uri:`https://www.youtube.com/embed/${video}?autoplay=1&controls=0&showinfo=0`}}/>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                   <IconAntDesign name="closecircle" color="white" size={40}/>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
    
          <TouchableHighlight
            style={styles.openButton}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <IconAntDesign name="caretright" color="white" size={80}/>

          </TouchableHighlight>
        </View>
    );
};

export default ModalVideo
    
    
    


