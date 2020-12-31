import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import 'firebase/auth'
import firebase from '../../utils/firebase'

const SignOff = () => {
    const Logout = () =>{
        firebase.auth().signOut();
    }
    return(
        <View>
          <Button title="Cerrar sesión" onPress={Logout}/>
        </View>
    )
}

export default SignOff

const styles = StyleSheet.create({})
