import React from 'react';

// React Native Navigation
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Stack Navigation Routes
import AuthStackNavigation from './AuthStackNavigation';

const RootNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigation;
