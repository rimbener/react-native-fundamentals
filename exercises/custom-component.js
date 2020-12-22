// Creating a Custom Component
import React from 'react';
import { Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = ({ onPress, text, buttonStyle }) => (
  <TouchableOpacity onPress={onPress}
    style={{
      backgroundColor: '#ff637c',
      alignSelf: 'center',
      marginVertical: 15,
      paddingVertical: 5,
      paddingHorizontal: 10,
      ...buttonStyle
    }}>
    <Text style={{ color: '#fff' }}>{text}</Text>
  </TouchableOpacity>
)


export default () => {
  // Replace return null with your code.
  return (
    <>
      <Button onPress={() => alert('Hello')} text="Say Hello"></Button>
      <Button
        text="Say Goobye"
        onPress={() => alert('Goodbye')}
        buttonStyle={{ backgroundColor: '#4dc2c2' }}></Button>
    </>
  );
};
