import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CardTotal from "../components/cardtotal";
import CardBar from "../components/cardbar";
import Button from "../components/button";

const Screen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.texthome}>Despesas</Text>
        <Text style={styles.text}>Valor gasto esse mês:</Text>
        <Text style={styles.title}>R$1000,00</Text>
        <CardBar />
        <CardTotal />
        <CardTotal />
      </View>
      <Button content={"Adicionar Categoria"}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom:72,
  },
  texthome: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
    marginTop: 50,
    height: 42,
  },
  title: {
    fontSize: 44,
    fontWeight: "bold",
    color: "#101B22",
    marginTop: 4,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    color: "#4C5459",
    marginTop: 16,
  },
});

export default Screen;
