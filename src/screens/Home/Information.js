import  React, {useEffect,useContext } from 'react'
import  { StyleSheet, View,SafeAreaView } from 'react-native'
import  getMovieById  from '../../api/getMovieById'
import getVideoById from '../../api/getVideoById'
import  MovieInformation from '../../components/Movies/MovieInformation'
import { MoviesIdContex }  from '../../contexts/MoviesIdContext'
import { VideoIdContex } from '../../contexts/VideoIdContext'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1B1B1D',
        width:'100%',
    },
    idVideo:{
        alignSelf:'stretch',
        height:300
    }
})

const Information = ({route}) => {
    
    const {idmovies,setIdmovies} = useContext(MoviesIdContex)
    const {video, setVideo} = useContext(VideoIdContex)
    const { id } = route.params;
    
    useEffect(() => {

        getVideoById(id).then((response) => {
            let idVideo= null;
            response.results.forEach((video) =>{
                if(video.site==='YouTube' && !idVideo){
                    idVideo = video.key;
                };
                setVideo(idVideo)
         });
        });
        getMovieById(id).then((response) => {
            setIdmovies([response]);
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

