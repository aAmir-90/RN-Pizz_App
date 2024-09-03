import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { BasketConext } from "./context";

export default function App() {
  return (
    <BasketConext>
      <StackNavigator />
    </BasketConext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
