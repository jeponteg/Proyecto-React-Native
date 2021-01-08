import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home/Home'
import Information from '../screens/Home/Information'

const Stack =createStackNavigator()

const StackNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen 
            	name='home' 
                component={Home} 
                options={{title:"Películas Populares"}}>
            </Stack.Screen> 

            <Stack.Screen 
            	name='information' 
                component={Information} 
                options={{title:"",headerTransparent:"true"}}>
            </Stack.Screen> 

        </Stack.Navigator>
    )
}

export default StackNavigation


