import React, {useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity, TextInput } from 'react-native'
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
    login: {
        flex:1,
        justifyContent: 'flex-end',
        marginBottom: 10,
    }
})

const LoginForm = ({ChangeForm}) => {

    const [formData, setFormData] = useState(defaultValue());
    const [formError, setFormError] = useState({});

    const login = () => {
        let errors = {};
        if(!formData.email || !formData.password){
            if(!formData.email) errors.email = true;
            if(!formData.password) errors.password = true;
        }else if(!validateEmail(formData.email)){
            errors.email= true;
        }else{
            firebase.auth().signInWithEmailAndPassword(formData.email,formData.password).then(()=>{
            }).catch(()=>{
                setFormError({
                    email:true,
                    password:true,
                });
            });
        }
        setFormError(errors)
    }

    return (
        <>
            <TextInput
                style={[styles.input,formError.email && styles.error]}
                placeholder="Email"
                placeholderTextColor="#969696"
                onChangeText={text => setFormData({...formData, email:text})}
            />
            <TextInput
                style={[styles.input,formError.password && styles.error]}
                placeholder="Password"
                placeholderTextColor="#969696"
                secureTextEntry={true}
                onChangeText={text => setFormData({...formData, password:text})} 
            />
            <TouchableOpacity onPress={login}>
                <Text style={styles.btnText}>Login in</Text>
            </TouchableOpacity>
            
            <View style={styles.login}>
                <TouchableOpacity onPress={ChangeForm}  >
                    <Text style={styles.btnText}>Registrarse</Text>
                </TouchableOpacity>
            </View>
 
        </>
    )
}

export default LoginForm

defaultValue = () => {
    return{
        email:'',
        password:'',
    };
}