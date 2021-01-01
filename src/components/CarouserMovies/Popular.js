import React from 'react'
import { StyleSheet, Image,Text, View, Dimensions, TouchableWithoutFeedback } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { BASE_PATH_IMG } from '../../api/constants'

const styles = StyleSheet.create({
    card:{
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
        height:450,
        borderRadius:20 
    },
    title:{
        marginHorizontal:10,
        marginTop:10
    }
})

const {width} = Dimensions.get('window');
const ITEM_WIDTH = Math.round(width * 0.7)

 const Popular = ({data})=> {
   
    return (
        <Carousel
            layout={'default'}
            data={data}
            renderItem={(item)=> <RenderItem data={item}/>}
            sliderWidth= {width}
            itemWidth = {ITEM_WIDTH}
        />
    )
}
export default Popular

const RenderItem = (props) => {
    const {data} = props;
    const {title,poster_path} = data.item;
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


