import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import RegisterScreen from '../screens/authentication/register/index';
import LoginScreen from '../screens/authentication/login/index';
import ResetPasswordScreen from '../screens/authentication/reset-password/index';
import ChangeEmailScreen from '../screens/authentication/change-email/index';
import ChangeNameScreen from '../screens/authentication/change-name/index';
import ForgotPasswordScreen from '../screens/authentication/forgot-password/index';
import MainTabNavigation from './MainTabNavigation';

const Stack = createNativeStackNavigator();

const AuthStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="RegisterScreen">
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
      <Stack.Screen name="ChangeEmailScreen" component={ChangeEmailScreen} />
      <Stack.Screen name="ChangeNameScreen" component={ChangeNameScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigation;
