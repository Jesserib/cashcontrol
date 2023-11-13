import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

const CardBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.text}>Despesas</Text>
          <Text style={styles.title}>R$1000,00</Text>
        </View>
        <View style={styles.RightContainer}>
          <Text style={styles.text}>Disponível</Text>
          <Text style={styles.title}>R$2.200,00</Text>
        </View>
      </View>
      <View style={styles.bar}>
        <View style={styles.barcolor}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: "auto",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.10)",
    backgroundColor: "#FFF",
    elevation: 2,
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  leftContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#101B22",
    marginTop: 4,
  },
  RightContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  text: {
    fontSize: 19,
    color: "#4C5459",
  },
  bar: {
    width: 311,
    height: 8,
    borderRadius: 6,
    backgroundColor: "#EAE9F0",
  },
  barcolor: {
    width: "40%",
    height: 8,
    borderRadius: 6,
    backgroundColor: "#6347EB",
  },
});

export default CardBar;
