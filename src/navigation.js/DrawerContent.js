import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer' 
import SignOff from '../components/Auth/SignOff';

const DrawerContent = ({navigation}) => {
    
    return (
        
        <DrawerContentScrollView>

            <SafeAreaView>
                <DrawerItem
                    label= "Inicio"
                    onPress={() => navigation.navigate('home')}
                />
                <SignOff/>

            </SafeAreaView>

        </DrawerContentScrollView>
           
    )
}

export default DrawerContent

const styles = StyleSheet.create({})
