import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function Navtext({text}) {
  return (
    <View style={styles.container}>
      <Text style={styles.texthome}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: 1,
  },
  texthome: {
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
    marginTop: 50,
    right:9,
    height:40,
  },
});
