import { SafeAreaView } from 'react-native';
import React, { useState } from 'react';

// Styles
import styles from '../tasks/style';

// React Native Navigation
import { useNavigation } from '@react-navigation/native';

// Components
import AppHeader from '../../common/components/AppHeader';
import ProfileButtonContainer from './components/ProfileButtonContainer';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('Masi');

  const handleLogout = () => {
    console.log('Logout');
  };


  return (
    <SafeAreaView style={styles.container}>
      <AppHeader name={userName} />

      <ProfileButtonContainer buttonTitle="Change Name" onPress={() => navigation.navigate('ChangeNameScreen')} />

      <ProfileButtonContainer buttonTitle="Change Email" onPress={() => navigation.navigate('ChangeEmailScreen')} />

      <ProfileButtonContainer buttonTitle="Reset Password" onPress={() => navigation.navigate('ResetPasswordScreen')} />

      <ProfileButtonContainer buttonTitle="Logout" onPress={handleLogout} />

    </SafeAreaView>
  );
};

export default ProfileScreen;
