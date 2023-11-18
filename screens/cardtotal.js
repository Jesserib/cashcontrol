import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CardTotal = ({
  nome,
  valor,
  tipo1,
  tipo2,
  receita1,
  receita2,
  mostrarDetalhes
}) => {
 const [detalhesVisiveis] = useState(mostrarDetalhes);
  const navigation = useNavigation();
  const navigateToScreen = (screenName) => {navigation.navigate(screenName)}
  
const CardTotal = ({ nome, valor }) => {
    valor = 0;
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.leftContainer}>
          <Image source={require("../assets/work.png")} style={styles.icon} />
          <Text style={styles.title}>{nome}</Text>
        </View>
        <Text style={styles.title}>R${valor}</Text>
      </View>
      {detalhesVisiveis && ( // Renderizar somente se detalhesVisiveis for verdadeiro
        <>
          <View style={styles.descriptionContainer}>
            <Text style={styles.text}>{tipo1}</Text>
            <Text style={styles.text}>R${receita1}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.text}>{tipo2}</Text>
            <Text style={styles.text}>R${receita2}</Text>
          </View>
        </>
      )}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={navigateToScreen("Receitas")}
      >
      </TouchableOpacity>
    </View>
  );
};
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
    padding: 24,
    marginBottom: 16,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 44,
    height: 44,
    marginRight: 16,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#101B22",
  },
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  text: {
    fontSize: 19,
    color: "#4C5459",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
  },
  button: {
    fontSize: 18,
    color: "#DEA54B",
    fontWeight: "bold",
  },
  iconbutton: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});

export default CardTotal;
