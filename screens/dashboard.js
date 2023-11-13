import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CardGreen from "../components/cardgreen";
import CardRed from "../components/cardred";
import CardGoal from "../components/cardgoal";
import CardTree from "../components/cardtree";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texthome}>Dashboard</Text>
      <View style={styles.cards}>
        <CardGreen Receitas="500" />
        <CardRed Despesas="500" />
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
