import React, {useEffect,useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity,ScrollView } from 'react-native'
import  getNewsMovieApi  from '../../api/movies'
import Movies from '../../components/Movies/Movies'
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../utils/colors'

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.COLOR_DARK,
        width:'100%',
        flex:1
    },
    icon:{
        flexDirection:'row',
        marginHorizontal:20, 
        paddingTop:20,
        justifyContent:'flex-end',
    },
    text:{
        color:'#FFFF',
        paddingTop:5,
        marginHorizontal:20
    }
})

const Home = () => {
   
    const [movies,setMovies] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        getNewsMovieApi(page).then((response) => {
            setMovies([...movies,...response.results]);
        });
    }, [page]);

    return (
        <ScrollView style={styles.container}>

            <View style={styles.icon}>

                <Text style={styles.text}>Cargar más películas</Text>

                <TouchableOpacity
                    onPress={ () => setPage(page + 1)}
                >
                    <IconAntDesign 
                        name="pluscircle" 
                        size={35} 
                        color={'#FFFF'}
                    />
                </TouchableOpacity>

            </View>

            {movies && (
                <View style={{ flex:1}}>
                    <Movies movies={movies}/>
                </View>
            )}
        </ScrollView>
    )
}

export default Home


