import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback,Image } from 'react-native'
import { BASE_PATH_IMG } from '../../api/constants'

const PopularCard = ({title,poster_path}) => {

    const imageUrl =`${BASE_PATH_IMG}/w500${poster_path}`
    
    return (
        <TouchableWithoutFeedback>
            <View style={styles.card}>
                <Image style={styles.image} source={{uri:imageUrl}}/>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default PopularCard

const styles = StyleSheet.create({
    card:{ 
        flex:1  
    },
    image:{
        width:'100%',
        height:450,
        borderRadius:20 
    },
    title:{
        marginHorizontal:10,
        marginTop:10
    }
})
