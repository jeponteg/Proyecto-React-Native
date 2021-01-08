import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { BASE_PATH_IMG } from '../../api/constants'
import ModalVideo from './ModalVideo'

const styles = StyleSheet.create({
    
    card:{ 
        flex:1,
    },
    image:{
        width:'100%',
        height:550,
        borderBottomLeftRadius:100,
        borderBottomRightRadius:100
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
      video:{
          marginTop:-80,
          justifyContent:'flex-end',
          alignItems:'flex-end',
          marginHorizontal:20,
      }
})

const InformationCard = ({id,title,overview,poster_path}) => {

    const imageUrl =`${BASE_PATH_IMG}/w500${poster_path}`
    
    return (
        <>
            <View style={styles.card}>
                <Image style={styles.image} source={{uri:imageUrl}}/>
                <View style={styles.video}>
                    <ModalVideo />
                </View>
                
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.overview}>{overview}</Text>
            </View>
        </>
    )
}

export default InformationCard
