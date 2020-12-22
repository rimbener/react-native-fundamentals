import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 0
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});

const Square = ({ text, bgColor = "#7ce0f9" }) => (
  <View style={[styles.box, { backgroundColor: bgColor }]}>
    <Text>{text}</Text>
  </View>
);

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default () => (
  <ScrollView style={styles.container} contentContainerStyle={{ backgroundColor: 'red' }}>
    {data.map((item, index) =>
      <Square key={index} text={`Square ${item}`}></Square>
    )}
  </ScrollView>
);