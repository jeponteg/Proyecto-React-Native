import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image, Dimensions } from 'react-native'
import { BASE_PATH_IMG } from '../../api/constants'
import { useNavigation } from '@react-navigation/native';

const {height} = Dimensions.get('window');
const ITEM_HEIGHT = Math.round(height * 0.64)

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
        height:ITEM_HEIGHT,
         borderRadius:20 
    },
    title:{
        marginHorizontal:10,
        marginTop:30,
        color:'white',
        fontSize:15,
        textAlign:'center',
        fontWeight:'bold'
    }
})


const MovieCard = ({id,title,poster_path}) => {
    
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
                { poster_path ? <Image style={styles.image} source={{uri:imageUrl}}/>  
                 : <Image style={styles.image}  source={require('../../../src/assets/img2.png')}/>
                }
                <Text style={styles.title}>{title}</Text>
            </View>
            
        </TouchableOpacity>
    )
}

export default MovieCard


