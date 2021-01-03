import React, {useEffect,useContext} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import  getNewsMovieApi  from '../../api/movies'
import PopularMovies from '../../components/Movies/PopularMovies'
import { MoviesContex } from '../../contexts/MoviesContext'

const Home = () => {

    const {movies,setMovies} = useContext(MoviesContex)

    useEffect(() => {
        getNewsMovieApi().then((response) => {
            setMovies(response.results);
        });
    }, []);

    return (
        <>
        <View style={styles.view}>
            {movies && (
                <View style={styles.new}>
                    <Text>Nuevas Peliculas</Text>
                    <PopularMovies/>
                </View>
            )}
        </View>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    new:{
        marginVertical:10,
        backgroundColor:'#1B1B1D'
        
    },
    view:{
        flex: 1,
        backgroundColor:'#1B1B1D'
    },
})

