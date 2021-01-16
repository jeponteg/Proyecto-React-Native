import React from 'react'
import { TouchableOpacity } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home/Home'
import Information from '../screens/Home/Information'
import UpcomingMovies from '../screens/Home/UpcomingMovies';
import Camera from '../screens/Photo/Camera';
import Search from '../screens/Home/Search';

const Stack =createStackNavigator()

const StackNavigation = (props) => {

const {navigation} = props;
    
    const button = () => {
        return (
            <TouchableOpacity
            style={{marginLeft:10}}
             onPress={() => navigation.openDrawer()}>
                <IconAntDesign 
                    name="menu-fold" 
                    size={30}
                />
            </TouchableOpacity> 
        )
    }

    const buttonSearch = () => {
        return (
            <TouchableOpacity
            style={{marginRight:15}}
             onPress={() => navigation.navigate('search')}>
                <IconAntDesign 
                    name="search1" 
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
                options={{
                    title:"Popular Movies",
                    headerLeft:() => button(),
                    headerRight:() => buttonSearch()
                }}>
            </Stack.Screen>

            <Stack.Screen 
            	name='upcoming' 
                component={UpcomingMovies} 
                options={{
                    title:"Upcoming Movies", 
                    headerRight:() => buttonSearch()
                }}>
            </Stack.Screen> 

            <Stack.Screen 
            	name='information' 
                component={Information} 
                options={{title:"Movie information"}}>
            </Stack.Screen>

            <Stack.Screen 
            	name='search' 
                component={Search} 
                options={{title:"search Movie"}}>
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


