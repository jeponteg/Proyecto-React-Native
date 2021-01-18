import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import ProfileData from '../../components/UserProfile.js/ProfileData'

const styles = StyleSheet.create({
    
    container:{
        width:'100%',
        flex:1,
        justifyContent:'center'
    },
})

const User = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ProfileData/>
        </SafeAreaView>
    )
}

export default User

