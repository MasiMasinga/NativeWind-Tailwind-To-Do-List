import {Text} from 'react-native';
import React from 'react';

// Styled Components
import styled from 'styled-components/native';

export const TextHeader = styled.Text`
  font-size: 24;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: ${props => (props.primary ? 'black' : '#010101')};
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

const Typography = ({title}) => {
  return <Text>{title}</Text>;
};

export default Typography;
