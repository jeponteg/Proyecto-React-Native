import React, { Component } from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { BASE_PATH_IMG } from '../../api/constants'
import ButtonShowModal from './ButtonShowModal'
import ModalVideo from './ModalVideo'
import MovieRating from './MovieRating'

const styles = StyleSheet.create({
    
    card:{ 
        flex:1,
    },
    image:{
        width:'100%',
        height:580,
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
          justifyContent:'flex-end',
          alignItems:'flex-end',
          marginHorizontal:20,
      },
    ShowModal:{
          flexDirection:'row',
          justifyContent:'space-around'
    }
})

export default class InformationCard extends Component {

    render(){

        const {title,overview,poster_path,vote_average,vote_count} = this.props;

        const imageUrl =`${BASE_PATH_IMG}/w500${poster_path}`
        
        return (
            <>
                <View style={styles.card}>
                    <View>
                        <Image style={styles.image} source={{uri:imageUrl}}/>
                    </View>
                    <View style={styles.video}>
                        <ModalVideo />
                    </View>
                    
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.ShowModal}>
                        <MovieRating voteCount={vote_count} voteAverage={vote_average}/>
                        <ButtonShowModal/> 
                    </View>
                    <Text style={styles.overview}>{overview}</Text> 
                   
                </View>
            </>
        )
    }
}


