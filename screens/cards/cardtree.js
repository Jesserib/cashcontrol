import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const CardTree = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textRec}>Dinheiro guardado:</Text>
          <Text style={styles.value}>R$3.800,00</Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.button}>Ver Detalhes</Text>
            <Image source={require("../assets/buttonicon.png")} style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={require("../assets/Buttontree.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 138,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.10)",
    backgroundColor: "#FFF",
    elevation: 2,
    marginTop: 16,
    marginBottom: 24,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "top",
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
    marginTop: 24,
  },
  image: {
    width: 138,
    height: 138,
    resizeMode: "contain",
  },
  textRec: {
    fontSize: 17,
    color: "#4C5459",
  },
  value: {
    fontSize: 30,
    color: "#101B22",
    fontWeight: "bold",
    marginTop: 4,
    width: 188,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  button: {
    fontSize: 18,
    color: "#DEA54B",
    fontWeight: "bold",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});

export default CardTree;
