import React from 'react'
import { StyleSheet, View, TextInput,} from 'react-native'

const styles = StyleSheet.create({
    perfil:{
        alignItems:'center',
    },
    input:{
        alignItems:'center',
        height:50,
        width:'80%',
        marginBottom:20,
        paddingHorizontal:20,
        borderRadius:10,
        fontSize:18,
        borderWidth:1,
        borderColor:'#1e3040',
    },
    
    register: {
        flex:1,
        justifyContent: 'flex-end',
        marginBottom: 10,
    }
})
const ProfileData = () => {
    return (
        <View style={styles.perfil}>
            <TextInput
              style = {styles.input}
              placeholder='Firstname'
              placeholderTextColor='#969696'
             
            />
            <TextInput
              style = {styles.input}
              placeholder='Lastname'
              placeholderTextColor='#969696'
             
            />
            <TextInput
              style = {styles.input}
              placeholder='Email'
              placeholderTextColor='#969696'
             
            />
            <TextInput
              style = {styles.input}
              placeholder='Phone'
              placeholderTextColor='#969696'
             
            />
        </View>
    )
}

export default ProfileData


