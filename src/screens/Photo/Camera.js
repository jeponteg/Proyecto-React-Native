import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { RNCamera } from 'react-native-camera'

const PendingPreview = () =>{
    <View style={styles.pendingPreview}>
        <Text>Esperando</Text>
    </View>
}

const Camera = () => {
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
               
               return <View/>
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
