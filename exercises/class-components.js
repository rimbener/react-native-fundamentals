import React from 'react';
import { View, Button, Text } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            presscount: 0
        }
    }

    render() {
        return (
            <View style={{ marginTop: 20, alignItems: "center" }}>
                <Text>{this.state.presscount}</Text>
                <Button title="Increment count"
                    onPress={() => this.setState((state) => ({ presscount: state.presscount + 1 }))}></Button>
            </View>
        )
    }
}