import React,{useState} from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native'
import firebase from '../../utils/firebase'
import "firebase/firestore"

firebase.firestore().settings({experimentalAutoDetectLongPolling: true})
const db = firebase.firestore(firebase);

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
    btnText:{
      
      fontSize:18,
  },

})

const ProfileData = () => {

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [phone, setPhone] = useState('')

  const register = () => {

    let datos = {};

    if(firstname || lastname || phone ){

        if(firstname) datos.firstname = firstname;
        if(lastname) datos.lastname = lastname;
        if(phone) datos.phone = phone;
       
        db.collection("datos_perfil")
        .add(datos)
        .then(() =>{
          console.log(ok)
        })
        .catch(()=>{
          console.log("error")
        })
    }else{
        return null
    }
  }

    return (
        <View style={styles.perfil}>
            <TextInput
              style = {styles.input}
              placeholder='Firstname'
              placeholderTextColor='#969696'
              onChangeText={text => setFirstname(text)} 
            />
            <TextInput
              style = {styles.input}
              placeholder='Lastname'
              placeholderTextColor='#969696'
              onChangeText={text => setLastname(text)} 
            />
          
            <TextInput
              style = {styles.input}
              placeholder='Phone'
              placeholderTextColor='#969696'
              onChangeText={text => setPhone(text)} 
            />

            <TouchableOpacity onPress={register}>
                <Text style={styles.btnText}>Registrate</Text>
            </TouchableOpacity>
        </View>

        
    )
}

export default ProfileData


