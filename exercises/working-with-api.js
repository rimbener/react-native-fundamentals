import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  name: {
    fontSize: 16,
  },
  separator: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 1,
  },
});

const usePeople = () => {
  const [loading, setLoading] = useState(true)
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100&inc=name')
      .then(response => response.json())
      .then(json => {
        const ordererArray = json.results.sort((a, b) => a.name.first > b.name.first ? 1 : -1)
        setPeople(ordererArray);
      })
      .catch(error => console.error(error))
      .finally(() => setTimeout(() => setLoading(false), 1000))
  }, [])

  return {
    loading,
    people
  }
}

export default () => {
  const { loading, people } = usePeople()
  if (loading) {
    return <ActivityIndicator style={{ marginTop: 50 }} />
  }
  return (
    <SafeAreaView>
      <FlatList style={{ height: '78vh' }}
        data={people}
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.name}>
                {item.name.first} {item.name.last}
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};
