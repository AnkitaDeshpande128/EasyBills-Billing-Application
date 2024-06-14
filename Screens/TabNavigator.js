import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, TouchableOpacity, View } from 'react-native';


const TabNavigator = ({ navigation,email,businessName }) => {

  console.log("Tab Navigator is rendered")
  return (
    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-evenly', backgroundColor: 'rgba(108,99,255,0.5)', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile',{email,businessName})}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text>About</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TabNavigator;
