import React from 'react'
import {View, StyleSheet, TouchableHighlight, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
    },
    circleContainer: {
      width: 200,
      height: 200,
      borderRadius: 100,
      backgroundColor: '#E6E2E2',
      justifyContent: 'center',
      alignItems: 'center',
    },
    addPhotoContainer: {
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageFrame: {
      width: 180,
      height: 180,
      borderRadius: 100,
    },
    textStyle: {
      paddingTop: 15,
     
    },
  });

const AddPhoto = () => {

    return (
        <View style={styles.container}>
          <TouchableHighlight
            
            style={styles.circleContainer}>
            <Icon 
                name ="user-alt" 
                color="white"
                size={120}
            />
          </TouchableHighlight>
        </View>
      )
}

export default AddPhoto


