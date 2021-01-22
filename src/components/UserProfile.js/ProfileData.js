import React,{useContext} from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native'
import { UserDataContex } from '../../contexts/UserDataContext'
import AsyncStorage from '@react-native-community/async-storage'

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

  const {firstname,lastname,phone, setFirstname,setLastname, setPhone} = useContext(UserDataContex);
 
  const register = () => {
    storeData(firstname, lastname, phone )     
  }

  const storeData = async (firstname, lastname, phone) => {
    try {
      await AsyncStorage.setItem('firstname', firstname)
      await AsyncStorage.setItem('lastname',  lastname) 
      await AsyncStorage.setItem('phone',  phone)   
    } catch (e) {
      // saving error
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


