import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigation from './StackNavigation';
import UserStack from './UserStack';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Tab = createBottomTabNavigator();

const TabNavigation = () => {

    return (
      
      <Tab.Navigator tabBarOptions = {{ showLabel: false }}>

        <Tab.Screen 
          name="Home" 
          component={StackNavigation}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              MaterialCommunityIcon.loadFont();
              return (
                <View style={styles.icon}>
                  <MaterialCommunityIcon name="home" color={color} size={30} />
                  <Text style={{color, marginLeft: 10}}>Home</Text>
                </View>
              );
            },
          }}
        />

        <Tab.Screen 
          name="User" 
          component={UserStack}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              MaterialCommunityIcon.loadFont();
              return (
                <View style={styles.icon}>
                  <MaterialCommunityIcon name="file-edit" color={color} size={30} />
                  <Text style={{color, marginLeft: 10}}>Edit profile</Text>
                </View>
              );
            },
          }}
        />

      </Tab.Navigator>
    )
}

export default TabNavigation


