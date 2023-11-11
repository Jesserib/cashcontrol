import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CardTree = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textRec}>Dinheiro guardado:</Text>
            <Text style={styles.value}>R$3.800,00</Text>
            <View style={styles.buttonContainer}>
              <Text style={styles.button}>Ver Detalhes</Text>
              <Image
                source={require("../assets/buttonicon.png")}
                style={styles.icon}
              />
            </View>
          </View>
          <Image
            source={require("../assets/Buttontree.png")}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 343,
    height: 138,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.10)",
    backgroundColor: "#FFF",
    elevation: 2,
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
    fontSize: 22,
    color: "#000",
  },
  value: {
    fontSize: 32,
    color: "#000",
    fontWeight: "bold",
    marginTop: 4,
    width: 188,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:8,
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
