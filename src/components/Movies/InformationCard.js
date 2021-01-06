import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { BASE_PATH_IMG } from '../../api/constants'

const styles = StyleSheet.create({
    card:{ 
        flex:1,
    },
    image:{
        width:'100%',
        height:650,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50
    },
    title:{
        marginHorizontal:10,
        marginTop:10,
        textAlign:'center',
        color:'white',
    },
    overview: {
        marginHorizontal: 30,
        marginTop: 20,
        textAlign: 'justify',
        color: '#8697a5',
        marginBottom:20
      },
    
})

const InformationCard = ({id,title,overview,poster_path}) => {

    const imageUrl =`${BASE_PATH_IMG}/w500${poster_path}`
    
    return (
        <View style={styles.card}>
                <Image style={styles.image} source={{uri:imageUrl}}/>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.overview}>{overview}</Text>
            </View>
    )
}

export default InformationCard

