import React,{useContext,useEffect} from 'react'
import {View, StyleSheet, TouchableHighlight, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ProfilePictureContex } from '../../contexts/ProfilePictureContext';
import AsyncStorage from '@react-native-community/async-storage'
import { UserDataContex } from '../../contexts/UserDataContext';

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
    marginBottom:20
  },
  imageFrame: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },  
});

const AddPhoto = () => {

  const {photo} = useContext(ProfilePictureContex);
  const {firstname,lastname,phone, setFirstname,setLastname, setPhone} = useContext(UserDataContex);
  
  useEffect(() => {
    getData();
  },[])

  const getData = async () => {

    const firstname = await AsyncStorage.getItem('firstname')
    const lastname = await AsyncStorage.getItem('lastname')
    const phone = await AsyncStorage.getItem('phone')
    setFirstname(firstname)
    setLastname(lastname)
    setPhone(phone)

  }

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

      <View>
        <Text>{firstname} {lastname}</Text>
      </View>

      <View>
        <Text>{phone}</Text> 
      </View>

    </View>     
  )
}

export default AddPhoto

