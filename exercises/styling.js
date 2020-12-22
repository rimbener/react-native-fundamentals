// Styling

import React from "react";
import { StyleSheet, View } from 'react-native';
import Square from "./components/Square";

export default () => (
    <View style={styles.container}>
        <Square text="Square 1"></Square>
        <Square style={{ backgroundColor: 'green' }} text="Square 2"></Square>
        <Square style={{ backgroundColor: 'red' }} text="Square 3"></Square>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})