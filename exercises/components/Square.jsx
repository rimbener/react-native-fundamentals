import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Square = ({ style, text }) => (
    <View style={[styles.box, style]}>
        <Text>{text}</Text>
    </View>
)

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'aqua'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})

export default Square;