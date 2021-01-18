import React, {useEffect,useState} from 'react'
import { StyleSheet,TextInput ,SafeAreaView, View } from 'react-native'
import searchMovie from '../../api/searchMovie'
import SearchMovie from '../../components/Movies/SearchMovie'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#072231',
        width:'100%',
        flex:1
    },
    boxInput:{
        backgroundColor:'#305E85',
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        alignItems:'center',
        height:50,
        width:'90%',
        marginBottom:20,
        paddingHorizontal:20,
        borderRadius:10,
        fontSize:18,
        borderWidth:1,
        borderColor:'white',
        marginTop:20,
        backgroundColor:'white',
        justifyContent:'center',
    }
})

const Search = () => {
   
    const [movies,setMovies] = useState([])
    const [search,setSearch] = useState([])
   
    useEffect(() => {
        searchMovie(search).then((response) => {
            setMovies(response.results);
        });
    }, [search]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.boxInput}>
                <TextInput
                    style = {styles.input}
                    placeholder='Firstname'
                    placeholderTextColor='#969696'
                    onChangeText={text => setSearch(text)} 
                />
            </View>
            {movies && (
                <View>
                    <SearchMovie movies={movies}/>
                </View>
            )}
        </SafeAreaView>
    )
}

export default Search


