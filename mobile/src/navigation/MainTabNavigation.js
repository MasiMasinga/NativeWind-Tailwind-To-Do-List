import React from 'react';

// React Native Vector Icons
import Icon from 'react-native-vector-icons/MaterialIcons';

// React Native Navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProfileStackNavigation from './ProfileStackNavigation';
import TasksStackNavigation from './TasksStackNavigation';

const Tab = createBottomTabNavigator();

const MainTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="TaskScreen"
      screenOptions={{
        tabBarActiveTintColor: '#000',
        headerShown: false,
      }}>
      <Tab.Screen
        name="TaskScreen"
        component={TasksStackNavigation}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({color, size}) => (
            // <MaterialCommunityIcons name="home" color={color} size={26} />
            <Icon name="home" type="ionicon" color="#000" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileStackNavigation}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="account-circle" type="ionicon" color="#000" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigation;
