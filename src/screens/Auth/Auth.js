import React,{useState} from 'react'
import { StyleSheet, View, Image } from 'react-native'
import LoginForm from '../../components/Auth/LoginForm';
import RegisterForm from '../../components/Auth/RegisterForm';

const styles = StyleSheet.create({
    view:{
        flex: 1,
        alignItems:'center',
        backgroundColor:'#1B1B1D'
    },
    logo:{
        width:'80%',
        height:240,
        marginTop: 50,
        marginBottom:50
    }
})
const Auth = () => {

    const [islogin, setIslogin] = useState(true);

    const ChangeForm = () => {
        setIslogin(!islogin);
    }

    return (
        <View style={styles.view} >
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
            { islogin ? <LoginForm ChangeForm={ChangeForm}/> : <RegisterForm ChangeForm={ChangeForm}/>}  
        </View>
    )
}

export default Auth



