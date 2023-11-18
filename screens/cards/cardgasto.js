import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Cardgasto({ handleClose, handleSave, inputHandler }) {
  const [mes, setMes] = useState("");
  const [descricao, setDescricao] = useState("");
  const [value, setValue] = useState("");


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require("../../assets/work.png")} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>O que você ganhou?</Text>
          <Text style={styles.subtitle}>Freelance</Text>
        </View>
      </View>
      <View>
        <Text style={styles.titlesub}>
          Coloque as informações da receita que você deseja informar:
        </Text>
        <View style={styles.inputview}>
          <View style={styles.area}>
            <Text>Data:</Text>
            <TextInput
              style={styles.input}
              value={mes}
              placeholder="Digit a data"
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
    height: "auto",
    top: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 16,
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
    width: 44,
    height: 44,
    borderRadius: 0,
  },
  titlesub: {
    marginTop: 40,
    fontSize: 16,
  },
  inputview: {
    marginTop: 30,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    height: 42,
    width: "auto",
    borderRadius: 8,
    marginTop: 10,
    borderColor: "#D8DAE5",
    padding: 12,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  button: {
    backgroundColor: "#5398BE",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 31,
    borderRadius: 16,
  },
  button1: {
    backgroundColor: "#fff",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C60000",
    width: 72,
    height: 31,
    borderRadius: 16,
  },
  buttonText1: {
    color: "#C60000",
  },
  buttonText: {
    color: "#fff",
  },
});
