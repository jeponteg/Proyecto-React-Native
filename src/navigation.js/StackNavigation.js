import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home/Home'

const Stack =createStackNavigator()

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            	name='home' 
                component={Home} 
                options={{title:"AppMovies"}}>
            </Stack.Screen> 
        </Stack.Navigator>
    )
}

export default StackNavigation


