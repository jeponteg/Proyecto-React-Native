import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import { BASE_PATH_IMG } from '../../api/constants'

const styles = StyleSheet.create({
    card:{ 
        flex:1
    },
    image:{
        width:'90%',
        height:410,
        borderRadius:20,
        marginHorizontal:20,
        marginTop:10, 
    },
    title:{
        marginHorizontal:10,
        marginTop:10,
        textAlign:'center',
        color:'white'
    }
})

const PopularCard = ({title,poster_path,handleInformation}) => {

    const imageUrl =`${BASE_PATH_IMG}/w500${poster_path}`
    
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

export default PopularCard


