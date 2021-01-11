import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import User from '../screens/User/User'
import ButtonDrawer from '../components/ButtonDrawer'

const Stack =createStackNavigator()

const UserStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            	name='user' 
                component={User} 
                options={{title:"Profile Data",headerLeft:() => ButtonDrawer()}}
                >
            </Stack.Screen> 
        </Stack.Navigator>
    )
}

export default UserStack


