import React,{useContext} from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { MoviesContex } from '../../contexts/MoviesContext'
import PopularCard from '../CarouserMovies/PopularCard'

const PopularMovies = () => {

    const {movies} = useContext(MoviesContex)

    return (
        <>
            <FlatList
                style={styles.flatListContainer}
                data={movies}
                keyExtractor={({id}) => id.toString()}
                renderItem={({
                item: {id,title,poster_path},
                }) => (
                    <PopularCard
                        id={id}
                        title={title}
                        poster_path= {poster_path}
                    />
                )}
            />
       </>
       
    )
}

export default PopularMovies

const styles = StyleSheet.create({
    flatListContainer: {
      padding: 10,
      width: '100%',
      height:'100%',
      flexGrow: 0 
    },
    
  });



