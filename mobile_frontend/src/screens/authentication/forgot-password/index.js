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

// Utils
import {Colors} from '../../../common/utils/constants';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.formContainer}>
          <Text style={styles.textHeader}>Forgot Password</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="black"
            cursorColor="black"
            allowFontScaling={false}
            autoCapitalize="words"
            style={styles.textInput}
          />
          <Button
            title="Forgot Password"
            onPress={() => navigation.navigate('')}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={styles.buttonButtonTextContainer}>
            <Text style={styles.bottomButtonText}>Remember Your Password?</Text>
            <Text style={styles.bottomButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;
