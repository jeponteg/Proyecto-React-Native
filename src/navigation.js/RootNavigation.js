import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();

const RootNavigation = () => {
    
    return (
        <Drawer.Navigator
            initialRouteName="Home" 
            drawerContent = {(props) => <DrawerContent {...props}/>}
        >
            <Drawer.Screen name="home" component={TabNavigation} />

        </Drawer.Navigator>
    )
}

export default RootNavigation

