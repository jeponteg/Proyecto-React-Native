import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  photoBoxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoBoxCircle: {
    width: width * 0.6,
    height: width * 0.6,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: '#000000',
    borderRadius: 200,
  },
  bottomButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  captureBottonContainer: {
    width: 100,
    height: 100,
    borderColor: '#B1ABAB',
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  captureInnerButtonContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#B1ABAB',
    backgroundColor: '#B1ABAB',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

const CameraInterface = ({takePicture = () => {}, camera}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.photoBoxContainer}>
        <View style={styles.photoBoxCircle} />
      </View>
      <View style={styles.bottomButtons}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="keyboard-backspace" color="white" size={50} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => takePicture(camera)}
          style={styles.captureBottonContainer}>
          <View style={styles.captureInnerButtonContainer} />
        </TouchableOpacity>
        <Icon name="image-multiple-outline" color="white" size={50} />
      </View>
    </View>
  );
};

export default CameraInterface;