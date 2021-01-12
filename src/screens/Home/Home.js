import React, {useEffect,useState} from 'react'
import { StyleSheet, View,SafeAreaView } from 'react-native'
import  getNewsMovieApi  from '../../api/movies'
import Movies from '../../components/Movies/Movies'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#072231',
        width:'100%',
        flex:1
    },
})

const Home = () => {
   
    const [movies,setMovies] = useState([])

    useEffect(() => {
        getNewsMovieApi().then((response) => {
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

export default Home


