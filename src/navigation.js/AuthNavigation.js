import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Auth from '../screens/Auth/Auth';

const Stack = createStackNavigator ();

const AuthNavigation = () => {

    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Auth" component={Auth}/>
        </Stack.Navigator>
    )
}

export default AuthNavigation

const styles = StyleSheet.create({})
