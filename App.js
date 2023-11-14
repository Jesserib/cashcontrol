import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import LoginScreen from "./screens/login";
import BottomMenu from "./components/navbar";
import Dashboard from "./screens/dashboard";
import Screen from "./screens/screen";
import Button from "./components/button";

export default function App() {
  return (
    <View style={styles.container}>
      <Screen/>
      <BottomMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    // fontFamily: "Nunito",
  },
});
