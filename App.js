import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./components/login";
import BottomMenu from "./components/bottombutton";
import Dashboard from "./components/dashboard";
import CardGreen from "./components/cardgreen";
import CardRed from "./components/cardred";
import CardGoal from "./components/cardgoal";
import CardTree from "./components/cardtree";

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard />
      <BottomMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // fontFamily: "Nunito",
  },
});
