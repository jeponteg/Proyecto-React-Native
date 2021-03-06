import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer' 
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from '../../src/utils/firebase'
import 'firebase/auth'
import AddPhoto from '../components/Photo/AddPhoto';

const styles = StyleSheet.create({
    photo:{
        paddingTop: 20,
        marginBottom:20
    },
});

const Logout = () =>{
    firebase.auth().signOut();
}

const DrawerContent = ({navigation}) => {
    
    return ( 
        <DrawerContentScrollView>
            <SafeAreaView>
                <View style={styles.photo}>
                    <AddPhoto/>
                </View>

                <DrawerItem
                    label= "Edit Profile Photo"
                    onPress={() => navigation.navigate('camera')}
                    icon={()=>(
                        <IconMaterialCommunityIcons name="camera" size={30} />
                    )}
                />
                
                <DrawerItem
                    label= "Upcoming Movies"
                    onPress={() => navigation.navigate('upcoming')}
                    icon={()=>(
                        <IconMaterialCommunityIcons name="movie-open" size={30} />
                    )}
                />
                <View style={styles.sign}>
                    <DrawerItem
                        label= "Sign off"
                        onPress={Logout}
                        icon={()=>(
                            <Icon name="sign-out" size={30} />
                        )}
                    />
                </View>
            </SafeAreaView>
        </DrawerContentScrollView>     
    )
}

export default DrawerContent
