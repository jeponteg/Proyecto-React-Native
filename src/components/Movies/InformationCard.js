import React, { Component } from 'react'
import { StyleSheet, Text, View,Image,Dimensions } from 'react-native'
import { BASE_PATH_IMG } from '../../api/constants'
import ModalVideo from './ModalVideo'
import MovieRating from './MovieRating'

const {height} = Dimensions.get('window');
const ITEM_HEIGHT = Math.round(height * 0.6)

const styles = StyleSheet.create({
    
    card:{ 
        flex:1,
    },
    image:{
        width:'100%',
        height:ITEM_HEIGHT,
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

export default class InformationCard extends Component {

    render(){

        const {title,overview,poster_path,vote_average,vote_count} = this.props;

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
}


