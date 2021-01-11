import React, {useEffect,useContext} from 'react'
import { StyleSheet, View,SafeAreaView } from 'react-native'
import getUpComingMovies from '../../api/getUpComingMovies'
import PopularMovies from '../../components/Movies/PopularMovies'
import { UpComingMoviesContex } from '../../contexts/UpComingMoviesContext'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1B1B1D',
        width:'100%',
        flex:1
    },
})

const UpcomingMovies = () => {

    const {movies,setMovies} = useContext(UpComingMoviesContex)
    
    useEffect(() => {
        getUpComingMovies().then((response) => {
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

export default UpcomingMovies

