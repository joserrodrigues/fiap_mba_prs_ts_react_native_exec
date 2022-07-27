import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./AppStyles";

export default function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <View style={styles.boxCounter}>
        <Text style={styles.titleCounter}> Contador {count}</Text>
      </View>

      <TouchableOpacity onPress={addCount} style={styles.button}>
        <Text style={styles.buttonText}> Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
