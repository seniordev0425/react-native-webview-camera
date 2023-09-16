import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './Stacks';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
