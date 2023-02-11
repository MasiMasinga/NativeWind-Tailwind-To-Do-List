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

// React Native Vector Icons
import Icon from 'react-native-vector-icons/MaterialIcons';

// Styles
import styles from './styles';

// React Native Navigation
import { useNavigation } from '@react-navigation/native';

const ChangeNameScreen = () => {
  const navigation = useNavigation();

  const handleChangeName = () => {
    console.log('Change Name');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" type="ionicon" color="#000" size={30} />
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.formContainer}>
          <Text style={styles.textHeader}>Change Name</Text>
          <TextInput
            placeholder="New Name"
            placeholderTextColor="black"
            cursorColor="black"
            allowFontScaling={false}
            autoCapitalize="words"
            style={styles.textInput}
          />
          <Button title="Save" onPress={handleChangeName} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ChangeNameScreen;
