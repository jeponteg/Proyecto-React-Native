import React, {useEffect,useContext} from 'react'
import { StyleSheet, View,SafeAreaView } from 'react-native'
import  getMovieById  from '../../api/getMovieById'
import MovieInformation from '../../components/Movies/MovieInformation'
import  { MoviesIdContex }  from '../../contexts/MoviesIdContext'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1B1B1D',
        width:'100%',
    },
})

const Information = ({route}) => {
    
    const {idmovies,setIdmovies} = useContext(MoviesIdContex)

    const { id } = route.params;
    
    useEffect(() => {
        getMovieById(id).then((response) => {
            setIdmovies([response])
        });
    }, []);
    
    return (
        <SafeAreaView style={styles.container}>
            {idmovies && (
                <View>
                    <MovieInformation/>
                </View>
            )}
        </SafeAreaView>
    )
}

export default Information

