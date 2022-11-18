import React from 'react';

// React Native Vector Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// React Native Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileStackNavigation}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigation;
