import React, {useEffect,useContext} from 'react'
import { StyleSheet, View,SafeAreaView } from 'react-native'
import  getNewsMovieApi  from '../../api/movies'
import PopularMovies from '../../components/Movies/PopularMovies'
import { MoviesContex } from '../../contexts/MoviesContext'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1B1B1D',
        width:'100%',
    },
})

const Home = () => {
    
    const {movies,setMovies} = useContext(MoviesContex)

    useEffect(() => {
        getNewsMovieApi().then((response) => {
            setMovies(response.results);
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {movies && (
                <View>
                    <PopularMovies/>
                </View>
            )}
        </SafeAreaView>
    )
}

export default Home


