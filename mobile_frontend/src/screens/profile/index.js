import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';

// Styles
import styles from '../tasks/style';

// Components
import AppHeader from '../../common/components/AppHeader';

const ProfileScreen = () => {
  const [userName, setUserName] = useState('Masi');

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader name={userName} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
