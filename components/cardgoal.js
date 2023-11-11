import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CardGoal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textRec}>Criar uma meta</Text>
            <Text style={styles.value}>
              Junte seu dinheiro agora, de modo fácil e prático!
            </Text>
          </View>
          <Image
            source={require("../assets/Buttonmoney.png")}
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
    height: 120,
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
    width: 56,
    height: 56,
    marginRight: 32,
    marginTop: 32,
    resizeMode: "contain",
  },
  textRec: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  value: {
    fontSize: 18,
    color: "#000",
    marginTop: 4,
    width: 188,
    lineHeight: 24,
  },
});

export default CardGoal;
