import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default () => {
    const [name, setName] = React.useState('');

    function sayHello(name) {
        alert(`Hello, ${name}!`);
        setName('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h2} >What is your name?</Text>
            <TextInput
                style={styles.input}
                value={name}
                placeholder="John Doe"
                placeholderTextColor="rgba(0,0,0,0.5)"
                onChangeText={(text) => setName(text)}
                autoFocus
            ></TextInput>
            <Button title="Say hello" disabled={!name} onPress={() => sayHello(name)}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
    h2: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})