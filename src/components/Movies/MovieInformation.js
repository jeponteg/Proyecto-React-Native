import React,{useContext} from 'react'
import { StyleSheet, FlatList } from 'react-native'
import  { MoviesIdContex }  from '../../contexts/MoviesIdContext'
import InformationCard from '../../components/Movies/InformationCard' 

const styles = StyleSheet.create({
    flatListContainer: {
      width: '100%',
      height:'100%', 
    },
});

const MovieInformation = () => {

    const {idmovies} = useContext(MoviesIdContex)
    
    return (
        <>
            <FlatList
                style={styles.flatListContainer}
                data={idmovies}
                keyExtractor={({id}) => id.toString()}
                renderItem={({
                item: {id,title,overview,poster_path},
                }) => (
                    <InformationCard
                        id={id}
                        title={title}
                        poster_path= {poster_path}
                        overview={overview}
                    />
                )}
            />
        </>
    )
}

export default MovieInformation


