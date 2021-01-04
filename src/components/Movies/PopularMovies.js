import React,{useContext} from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { MoviesContex } from '../../contexts/MoviesContext'
import PopularCard from '../../components/Movies/PopularCard' 
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    flatListContainer: {
      padding: 10,
      width: '100%',
      height:'100%', 
    },
  
  });

const PopularMovies = () => {

    const {movies} = useContext(MoviesContex)
    const navigation = useNavigation();

    const handleInformation = () => {
        navigation.navigate('information')
    }
    
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatListContainer}
                data={movies}
                keyExtractor={({id}) => id.toString()}
                renderItem={({
                item: {id,title,poster_path},
                }) => (
                    <PopularCard
                        handleInformation= {handleInformation}
                        id={id}
                        title={title}
                        poster_path= {poster_path}
                    />
                )}
            />
  </View>
    )
}

export default PopularMovies




