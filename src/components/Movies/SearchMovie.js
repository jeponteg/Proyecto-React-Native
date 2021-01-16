import React from 'react'
import { Dimensions,} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import SearchCard from './SearchCard'

const {width} = Dimensions.get('window');
const ITEM_WIDTH = Math.round(width * 0.7)

 const SearchMovie = ({movies})=> {

    return (
        <Carousel
            layout={'default'}
            data={movies}
            sliderWidth= {width}
            itemWidth = {ITEM_WIDTH}
            renderItem={({
            item: {id,title,poster_path},
            })=> (
                <SearchCard
                    id={id}
                    title={title}
                    poster_path= {poster_path}
                />
            )}
                
        />
    )
}
export default SearchMovie



