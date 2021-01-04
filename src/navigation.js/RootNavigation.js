import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import StackNavigation from './StackNavigation';

const Drawer = createDrawerNavigator();

const RootNavigation = () => {
    
    return (
        <Drawer.Navigator
            initialRouteName="Home" 
            drawerContent = {(props) => <DrawerContent {...props}/>}
        >
            <Drawer.Screen name="Home" component={StackNavigation} />

        </Drawer.Navigator>
    )
}

export default RootNavigation

