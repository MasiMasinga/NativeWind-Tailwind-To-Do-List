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

const RegisterScreen = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.formContainer}>
          <Text style={styles.textHeader}>Register Account</Text>
          <TextInput
            placeholder="First Name"
            placeholderTextColor="black"
            cursorColor="black"
            allowFontScaling={false}
            autoCapitalize="words"
            style={styles.textInput}
          />
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
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="black"
            cursorColor="black"
            allowFontScaling={false}
            autoCapitalize="words"
            style={styles.textInput}
          />
          <Button
            title="Register"
            onPress={() => navigation.navigate('MainTabNavigation')}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={styles.buttonButtonTextContainer}>
            <Text style={styles.bottomButtonText}>
              Already Have an Account?
            </Text>
            <Text style={styles.bottomButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
