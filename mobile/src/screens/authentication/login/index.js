import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

// Components
import Button from '../../../common/components/Button';

// Styles
import styles from './styles';

// React Native Navigation
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.formContainer}>
          <Text style={styles.textHeader}>Login Account</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="black"
            cursorColor="black"
            allowFontScaling={false}
            autoCapitalize="words"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="black"
            cursorColor="black"
            allowFontScaling={false}
            autoCapitalize="words"
            style={styles.textInput}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <Button
            title="Login"
            onPress={() => navigation.navigate('MainTabNavigation')}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}
            style={styles.buttonButtonTextContainer}>
            <Text style={styles.bottomButtonText}>Don't Have an Account?</Text>
            <Text style={styles.bottomButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
