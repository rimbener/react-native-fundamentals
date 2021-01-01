import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { listener2 } from "../support/component-lifecycle";

export default () => {
  const [updateCount, setUpdateCount] = useState(0);
  const [listenerName, setListenerName] = useState('cat')

  useEffect(() => {
    setUpdateCount(0)
    const unsubscribe = listener2(listenerName, () => {
      setUpdateCount(updateCount => updateCount + 1)
    })

    return () => unsubscribe();
  }, [listenerName])

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>The listener has updated {updateCount} time(s).</Text>
      <Text>Listening to {listenerName}</Text>
      <Button title="Change listener" onPress={() => {
        setListenerName(name => {
          if (name === 'cat') {
            return 'dog'
          }
          return 'cat'

        })
      }}
      ></Button>
    </View >
  );
};
