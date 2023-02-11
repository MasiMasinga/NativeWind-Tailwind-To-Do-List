import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TasksScreen from '../screens/tasks/index';

const HomeStack = createStackNavigator();

const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TasksScreen"
        component={TasksScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
