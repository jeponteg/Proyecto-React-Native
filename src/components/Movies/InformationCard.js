import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { BASE_PATH_IMG } from '../../api/constants'
import ModalVideo from './ModalVideo'
import MovieRating from './MovieRating'

const styles = StyleSheet.create({
    
    card:{ 
        flex:1,
    },
    image:{
        width:'100%',
        height:550,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50
    },
    title:{
        marginHorizontal:10,
        marginTop:10,
        textAlign:'center',
        color:'white',
        fontSize:16,
        fontWeight:'bold'
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

const InformationCard = ({id,title,overview,poster_path,vote_average,vote_count}) => {

    const imageUrl =`${BASE_PATH_IMG}/w500${poster_path}`
    
    return (
        <>
            <View style={styles.card}>
                <Image style={styles.image} source={{uri:imageUrl}}/>
                <View style={styles.video}>
                    <ModalVideo />
                </View>
                
                <Text style={styles.title}>{title}</Text>

                <MovieRating voteCount={vote_count} voteAverage={vote_average}/>

                <Text style={styles.overview}>{overview}</Text>
            </View>
        </>
    )
}

export default InformationCard

