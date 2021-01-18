import React,{useContext} from 'react'
import {View, StyleSheet, TouchableHighlight, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ProfilePictureContex } from '../../contexts/ProfilePictureContext';

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
  imageFrame: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },  
  
});

const AddPhoto = () => {

  const {photo} = useContext(ProfilePictureContex);
   
  const ImagePhoto = !photo ? (
    <View>
      <Icon 
          name ="user-alt" 
          color="white"
          size={120}
        />
    </View>
  ) : (
    <Image style={styles.imageFrame} source={{uri:photo}} />
  );

  return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.circleContainer}>
          {ImagePhoto}
        </TouchableHighlight>
      </View>
  )
}

export default AddPhoto

