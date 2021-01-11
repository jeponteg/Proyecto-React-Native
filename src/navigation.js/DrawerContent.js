import React from 'react'
import { SafeAreaView } from 'react-native'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer' 
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from '../../src/utils/firebase'
import 'firebase/auth'

const Logout = () =>{

    firebase.auth().signOut();
}

const DrawerContent = ({navigation}) => {
    
    return ( 
        <DrawerContentScrollView>
            <SafeAreaView>
               
                <DrawerItem
                    label= "Upcoming Movies"
                    onPress={() => navigation.navigate('upcoming')}
                    icon={()=>(
                        <IconMaterialCommunityIcons name="movie-open" size={30} />
                    )}
                />
                <DrawerItem
                    label= "Sign off"
                    onPress={Logout}
                    icon={()=>(
                        <Icon name="sign-out" size={30} />
                    )}
                />
                
            </SafeAreaView>
        </DrawerContentScrollView>     
    )
}

export default DrawerContent
