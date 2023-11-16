import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import Insertgasto from "./screens/cards/cardinsertgasto";


export default function App() {
  return (
    <View style={styles.container}>
      <Insertgasto />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
