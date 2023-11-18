import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

<<<<<<< HEAD
export default function Cardgasto({ handleClose, handleSave, inputHandler }) {
=======
export default function Cardgasto() {
>>>>>>> 37ffd184bdaca940260d713b4602ff2706a2ab3c
  const [mes, setMes] = useState("");
  const [descricao, setDescricao] = useState("");
  const [value, setValue] = useState("");

<<<<<<< HEAD
=======
  const handleClose = () => {};

  const handleSave = () => {};
>>>>>>> 37ffd184bdaca940260d713b4602ff2706a2ab3c

  return (
    <View style={styles.container}>
      <View style={styles.content}>
<<<<<<< HEAD
        <Image source={require("../../assets/work.png")} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>O que você ganhou?</Text>
          <Text style={styles.subtitle}>Freelance</Text>
=======
        <Image source={require("../../assets/home.png")} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>O que você gastou?</Text>
          <Text style={styles.subtitle}>Contas da casa </Text>
>>>>>>> 37ffd184bdaca940260d713b4602ff2706a2ab3c
        </View>
      </View>
      <View>
        <Text style={styles.titlesub}>
<<<<<<< HEAD
          Coloque as informações da receita que você deseja informar:
        </Text>
        <View style={styles.inputview}>
          <View style={styles.area}>
            <Text>Data:</Text>
            <TextInput
              style={styles.input}
              value={mes}
              placeholder="Digit a data"
=======
          Coloque as informações da despesa que você deseja informar:
        </Text>
        <View style={styles.inputview}>
          <View style={styles.area}>
            <Text>Mês:</Text>
            <TextInput
              style={styles.input}
              value={mes}
              placeholder="Digite o mês"
>>>>>>> 37ffd184bdaca940260d713b4602ff2706a2ab3c
              keyboardType="text"
              onChangeText={(mes) => setMes(mes)}
            />
          </View>
          <View style={styles.area}>
            <Text>Descrição:</Text>
            <TextInput
              style={styles.input}
              value={descricao}
              placeholder="Digite a descrição"
              onChangeText={(descricao) => setDescricao(descricao)}
              keyboardType="text"
            />
          </View>
          <View style={styles.area}>
            <Text>Valor:</Text>
            <TextInput
              style={styles.input}
              value={value}
              placeholder="Digite o valor gasto"
              onChangeText={(value) => setValue(value)}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button1} onPress={handleClose}>
            <Text style={styles.buttonText1}>Fechar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 327,
<<<<<<< HEAD
    height: "auto",
    top: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 16,
=======
    height: 458,
    top: 150,
    borderRadius: 8,
    backgroundColor: "#fff",
>>>>>>> 37ffd184bdaca940260d713b4602ff2706a2ab3c
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    marginTop: 5,
    fontSize: 14,
    color: "#555",
  },
  image: {
<<<<<<< HEAD
    width: 44,
    height: 44,
    borderRadius: 0,
=======
    width: 60,
    height: 60,
    borderRadius: 8,
>>>>>>> 37ffd184bdaca940260d713b4602ff2706a2ab3c
  },
  titlesub: {
    marginTop: 40,
    fontSize: 16,
  },
  inputview: {
    marginTop: 30,
    justifyContent: "center",
<<<<<<< HEAD
=======
    marginLeft: 35,
>>>>>>> 37ffd184bdaca940260d713b4602ff2706a2ab3c
  },
  input: {
    borderWidth: 1,
    height: 42,
<<<<<<< HEAD
    width: "auto",
    borderRadius: 8,
    marginTop: 10,
    borderColor: "#D8DAE5",
    padding: 12,
    marginBottom: 16,
=======
    width: 250,
    borderRadius: 8,
    marginTop: 10,
    borderColor: "#D8DAE5",
    padding: 10,
    marginTop: 10,
  },
  area: {
    marginBottom: 30,
>>>>>>> 37ffd184bdaca940260d713b4602ff2706a2ab3c
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
<<<<<<< HEAD
    marginTop: 8,
=======
    marginTop: 20,
    paddingHorizontal: 35,
>>>>>>> 37ffd184bdaca940260d713b4602ff2706a2ab3c
  },
  button: {
    backgroundColor: "#5398BE",
    justifyContent: "center",
    alignItems: "center",
<<<<<<< HEAD
    width: 100,
    height: 31,
    borderRadius: 16,
=======
    width: 72,
    height: 33,
    borderRadius: 20,
>>>>>>> 37ffd184bdaca940260d713b4602ff2706a2ab3c
  },
  button1: {
    backgroundColor: "#fff",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C60000",
    width: 72,
<<<<<<< HEAD
    height: 31,
    borderRadius: 16,
=======
    height: 33,
    borderRadius: 20,
>>>>>>> 37ffd184bdaca940260d713b4602ff2706a2ab3c
  },
  buttonText1: {
    color: "#C60000",
  },
  buttonText: {
    color: "#fff",
  },
});
