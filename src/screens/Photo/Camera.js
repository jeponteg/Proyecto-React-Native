import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import CameraInterface from '../../components/Photo/CameraInterface'
import {useNavigation} from '@react-navigation/native';

const PendingPreview = () =>{
    <View style={styles.pendingPreview}>
        <Text>Esperando</Text>
    </View>
}

const Camera = () => {
    const navigation = useNavigation();
    
    const takePicture = async (camera) => {
        const options = {quality: 0.4, base64: true};
        const data = await camera.takePictureAsync(options);
        if (data?.uri) {
          console.log(data)
          navigation.pop();
        }
      };

    return (
        <View style= {styles.container}>
           <RNCamera
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            captureAudio={false}
           >
               {({camera,status}) => {
                if(status !== 'READY'){
                   return <Text>Esperando</Text>;
                }
               
               return <CameraInterface takePicture={takePicture} camera={camera}/>
            }}

          </RNCamera>
        </View>
    )
}

export default Camera

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor: 'black'
    },
    preview:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    pendingPreview:{
        flex:1,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center'
    }
})
