import React from 'react'
import { TouchableOpacity } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home/Home'
import Information from '../screens/Home/Information'
import UpcomingMovies from '../screens/Home/UpcomingMovies';
import Camera from '../screens/Photo/Camera';

const Stack =createStackNavigator()

const StackNavigation = (props) => {

const {navigation} = props;
    
    const button = () => {
        return (
            <TouchableOpacity
             onPress={() => navigation.openDrawer()}>
                <IconAntDesign 
                    name="menu-fold" 
                    size={30}
                />
            </TouchableOpacity> 
        )
    }
    return (
        <Stack.Navigator>

            <Stack.Screen 
            	name='home' 
                component={Home} 
                options={{title:"Popular Movies", headerLeft:() => button()}}>
            </Stack.Screen>

            <Stack.Screen 
            	name='upcoming' 
                component={UpcomingMovies} 
                options={{title:"Upcoming Movies"}}>
            </Stack.Screen> 

            <Stack.Screen 
            	name='information' 
                component={Information} 
                options={{title:"Movie information"}}>
            </Stack.Screen>

            <Stack.Screen 
            	name='camera' 
                component={Camera} 
                options={{title:" ",headerTransparent:true}}>
            </Stack.Screen> 

           
        </Stack.Navigator>
    )
}

export default StackNavigation


