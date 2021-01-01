import React, {useEffect,useContext} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import  getNewsMovieApi  from '../../api/movies'
import Popular from '../../components/CarouserMovies/Popular'
import { MoviesContex } from '../../contexts/MoviesContext'

const Home = () => {

    const {movies,setMovies} = useContext(MoviesContex)

    useEffect(() => {
        getNewsMovieApi().then((response) => {
            setMovies(response.results);
        });
    }, []);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {movies && (
                <View style={styles.new}>
                    <Text>Nuevas Peliculas</Text>
                    <Popular data={movies}/>
                </View>
            )}
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    new:{
        marginVertical:10
    }
})

