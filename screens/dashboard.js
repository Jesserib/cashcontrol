import React from "react";
<<<<<<< HEAD
import {View, Text, StyleSheet, TouchableOpacity } from "react-native";
=======
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

>>>>>>> 37ffd184bdaca940260d713b4602ff2706a2ab3c
import CardGreen from "./cards/cardgreen";
import CardRed from "./cards/cardred";
import CardGoal from "./cards/cardgoal";
import CardTree from "./cards/cardtree";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();

<<<<<<< HEAD
  const navigateToScreen =(screenName) => {
=======
  const navigateToScreen = (screenName) => {
>>>>>>> 37ffd184bdaca940260d713b4602ff2706a2ab3c
    navigation.navigate(screenName);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.texthome}>Dashboard</Text>
      <View style={styles.cards}>
        <TouchableOpacity onPress={() => navigateToScreen("Receitas")}>
<<<<<<< HEAD
          <CardGreen Receitas="3300,00" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen("Despesas")}>
          <CardRed Despesas="1000,00" />
=======
          <CardGreen Receitas="1000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen("Despesas")}>
          <CardRed Despesas="1000" />
>>>>>>> 37ffd184bdaca940260d713b4602ff2706a2ab3c
        </TouchableOpacity>
      </View>
      <CardTree />
      <CardGoal />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
  },
  texthome: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
    marginTop: 50,
    height: 42,
  },
  cards: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 24,
    marginBottom: 0,
  },
});

export default Dashboard;
