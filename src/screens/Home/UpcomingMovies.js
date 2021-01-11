import React, {useEffect,useState} from 'react'
import { StyleSheet, View,SafeAreaView } from 'react-native'
import getUpComingMovies from '../../api/getUpComingMovies'
import Movies from '../../components/Movies/Movies'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1B1B1D',
        width:'100%',
        flex:1
    },
})

const UpcomingMovies = () => {

    const [movies, setMovies] = useState(null)
    
    useEffect(() => {
        getUpComingMovies().then((response) => {
            setMovies(response.results);
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {movies && (
                <View>
                    <Movies movies={movies}/>
                </View>
            )}
        </SafeAreaView>
    )
}

export default UpcomingMovies

