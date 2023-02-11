import React from 'react';
import {LogBox} from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return <RootNavigation />;
};

export default App;
