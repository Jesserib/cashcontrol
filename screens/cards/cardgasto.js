import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Cardgasto() {
  const [mes, setMes] = useState("");
  const [descricao, setDescricao] = useState("");
  const [value, setValue] = useState("");

  const handleClose = () => {};

  const handleSave = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require("../../assets/home.png")} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>O que você gastou?</Text>
          <Text style={styles.subtitle}>Contas da casa </Text>
        </View>
      </View>
      <View>
        <Text style={styles.titlesub}>
          Coloque as informações da despesa que você deseja informar:
        </Text>
        <View style={styles.inputview}>
          <View style={styles.area}>
            <Text>Mês:</Text>
            <TextInput
              style={styles.input}
              value={mes}
              placeholder="Digite o mês"
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
    height: 458,
    top: 150,
    borderRadius: 8,
    backgroundColor: "#fff",
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
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  titlesub: {
    marginTop: 40,
    fontSize: 16,
  },
  inputview: {
    marginTop: 30,
    justifyContent: "center",
    marginLeft: 35,
  },
  input: {
    borderWidth: 1,
    height: 42,
    width: 250,
    borderRadius: 8,
    marginTop: 10,
    borderColor: "#D8DAE5",
    padding: 10,
    marginTop: 10,
  },
  area: {
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 35,
  },
  button: {
    backgroundColor: "#5398BE",
    justifyContent: "center",
    alignItems: "center",
    width: 72,
    height: 33,
    borderRadius: 20,
  },
  button1: {
    backgroundColor: "#fff",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C60000",
    width: 72,
    height: 33,
    borderRadius: 20,
  },
  buttonText1: {
    color: "#C60000",
  },
  buttonText: {
    color: "#fff",
  },
});
