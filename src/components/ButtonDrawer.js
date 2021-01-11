import React from 'react'
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import  { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const ButtonDrawer = () => {

    const navigation = useNavigation();

    return (

        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
        >
            <IconAntDesign 
                name="menu-fold" 
                size={30}
            />
        </TouchableOpacity> 
    )
}

export default ButtonDrawer


