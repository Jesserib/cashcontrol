import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CardGreen = ({ Receitas }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../assets/Buttongrren.png")}
          style={styles.image}
        />
        <Text style={styles.textRec}>Receitas</Text>
        <Text style={styles.value}>R${Receitas}</Text>
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
    width: 163,
    height: 155,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(0, 71, 60, 0.10)",
    backgroundColor: "#DEF1EE",
    elevation: 2,
  },
  image: {
    width: 44,
    height: 44,
    marginTop: 24,
    marginLeft: 16,
    resizeMode: "contain",
  },
  textRec: {
    fontSize: 18,
    color: "#000",
    marginTop: 16,
    marginLeft: 16,
  },
  value:{
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
    marginTop: 4,
    marginLeft: 16,
  }
});

export default CardGreen;
                 