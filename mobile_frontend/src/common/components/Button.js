import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Button = ({title, onPress}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {textAlign: 'center', margin: 10},
  button: {
    fontWeight: 'bold',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#4299e1',
    borderRadius: 6,
  },
  buttonText: {color: 'white', textAlign: 'center', fontWeight: 'bold'},
});
