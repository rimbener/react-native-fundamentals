// Capturing User Taps
import React from 'react';
import { Button, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

// TIP: Button is a component exposed by React Native. You'll import it the same way you did View
// and Text previously.
function pressed() {
  alert('hello')
}
export default () => {
  // Replace return null with your code.
  return (
    <>
      <Button onPress={pressed} title="Button 1"></Button>
      <TouchableOpacity onPress={pressed}
        style={{
          padding: 10,
          backgroundColor: 'blue',
          alignSelf: 'center'
        }}>
        <Text style={{ color: '#fff', fontSize: 18 }} >Button 2</Text>
      </TouchableOpacity>
    </>
  );
};
