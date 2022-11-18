import {TouchableOpacity, View, Text} from 'react-native';
import React from 'react';

const Button = ({title, onPress}) => {
  return (
    <View style={{textAlign: 'center', margin: 10}}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            fontWeight: 'bold',
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#4299e1',
            borderRadius: 6,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
