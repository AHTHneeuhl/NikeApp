import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Cart from "./src/screens/Cart";

export default function App() {
  return (
    <View style={styles.container}>
      <Cart />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
