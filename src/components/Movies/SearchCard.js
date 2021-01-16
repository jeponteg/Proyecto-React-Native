import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import { BASE_PATH_IMG } from '../../api/constants'
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    card:{
        paddingTop:20,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:1,
        shadowRadius:10,
        },
        image:{
            width:'100%',
            height:500,
            borderRadius:20 
        },
        title:{
            marginHorizontal:10,
            marginTop:30,
            color:'white',
            fontSize:18,
            textAlign:'center',
            fontWeight:'bold'
        }
    })

const SearchCard = ({id,title,poster_path}) => {
    
    const imageUrl =`${BASE_PATH_IMG}/w500${poster_path}`
    const navigation = useNavigation();

    const handleInformation = () => {
        navigation.navigate('information',{id})
    }
    return (
        <TouchableOpacity
            onPress={handleInformation}
        >
            <View style={styles.card}>
                <Image style={styles.image} source={{uri:imageUrl}}/>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SearchCard


