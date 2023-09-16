import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import WebviewScreen from '../screens/WebviewScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <RootStack.Navigator initialRouteName="HomeScreen">
      <RootStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="WebviewScreen"
        component={WebviewScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default NavigationStack;
