import React,{ Component } from 'react'
import { Dimensions,} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import PopularCard from './PopularCard'

const {width} = Dimensions.get('window');
const ITEM_WIDTH = Math.round(width * 0.7)

export default class Movies extends Component  {

    render(){

       const {movies} = this.props
    
        return (
            <Carousel
                layout={'default'}
                data={movies}
                sliderWidth= {width}
                itemWidth = {ITEM_WIDTH}
                renderItem={({
                item: {id,title,poster_path},
                })=> (
                    <PopularCard
                        id={id}
                        title={title}
                        poster_path= {poster_path}
                    />
                )}
                    
            />
        )
    }    
}




