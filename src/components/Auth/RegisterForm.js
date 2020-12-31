import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import {validateEmail} from '../../utils/validation'
import firebase from '../../utils/firebase' 
const styles = StyleSheet.create({
    btnText:{
        color:'#FFFF',
        fontSize:18,
    },
    input:{
        height:50,
        color:'#FFFF',
        width:'80%',
        marginBottom:25,
        backgroundColor:'#1e3040',
        paddingHorizontal:20,
        borderRadius:10,
        fontSize:18,
        borderWidth:1,
        borderColor:'#1e3040',
    },
    error:{
        borderColor:'#940c0c',
    },
    register: {
        flex:1,
        justifyContent: 'flex-end',
        marginBottom: 10,
    }
})
const Registerform = ({ChangeForm}) => {

    const [formData, setFormData] = useState(defaultValue());
    const [formError, setFormError] = useState({});

    const register = () => {
        let errors = {};
        if(!formData.email || !formData.password || !formData.repeatPassword ){
            if(!formData.email) errors.email = true;
            if(!formData.password) errors.password = true;
            if(!formData.repeatPassword) errors.repeatPassword = true;
        }else if(!validateEmail(formData.email)){
            errors.email= true;
        }else if (formData.password !== formData.repeatPassword){
            errors.password= true;
            errors.repeatPassword = true;
        }else if (formData.password.length < 6){
            errors.password= true;
            errors.repeatPassword = true;
        }else{
            firebase.auth().createUserWithEmailAndPassword(formData.email,formData.password)
            .catch(()=>{
                setFormError({
                    email:true,
                    password:true,
                    repeatPassword:true,
                });
            });
        }

        setFormError(errors)
    }
    return (
        <>
            <TextInput
              style = {[styles.input,formError.email && styles.error]}
              placeholder='Email'
              placeholderTextColor='#969696'
              onChangeText={text => setFormData({...formData, email:text})}
            />

            <TextInput
              style = {[styles.input,formError.password && styles.error]}
              placeholder='Passaword'
              secureTextEntry={true}
              placeholderTextColor='#969696' 
              onChangeText={text => setFormData({...formData, password:text})} 
            />

            <TextInput
              style = {[styles.input,formError.repeatPassword && styles.error]}
              placeholder='Confirm Password'
              secureTextEntry={true}
              placeholderTextColor='#969696'  
              onChangeText={text => setFormData({...formData, repeatPassword:text})} 
            />

            <TouchableOpacity onPress={register}>
                <Text style={styles.btnText}>Registrate</Text>
            </TouchableOpacity>
            
            <View style={styles.register}>
                <TouchableOpacity onPress={ChangeForm}  >
                    <Text style={styles.btnText}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>         
           
        </>
    )
}

export default Registerform

defaultValue = () => {
    return{
        email:'',
        password:'',
        repeatPassword:'',
    };
}