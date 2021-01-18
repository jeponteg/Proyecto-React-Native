import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Rating } from 'react-native-ratings';
import rating from '../../assets/rating.png'

const styles = StyleSheet.create({
    rating:{
        marginHorizontal:30,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        fontSize:16,
        marginRight:5,
        color:'white'
    },
    voteCount:{
        fontSize:12,
        color:'#8697a5' 
    }
})

const MovieRating = ({voteCount,voteAverage}) => {
    
    return (
        <View style={styles.rating}>
            <Rating
                type='custom'
                ratingImage={rating}
                ratingColor='#ffc205'
                ratingBackgroundColor='#192734'
                startingValue={voteAverage}
                imageSize={20}
                style={{marginRight:15}}
            />
            <Text style={styles.text}>{voteAverage}</Text>
            <Text style={styles.voteCount}>{voteCount} votos</Text>
        </View>
    )
}

export default MovieRating

