import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const CardAdd = ({ handleClose, handleSave, inputHandler, name }) => {

  // const handleSave = () => {
  //   fetch("http://localhost:8888/category", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: name,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       handleClose();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Qual categoria gostaria de adicionar?</Text>
      <Text style={styles.textsub}>
        Coloque a informação sobre essa categoria
      </Text>
      <View style={styles.inputview}>
        <Text>Nome:</Text>
        <TextInput
          style={styles.input}
          onChangeText={inputHandler}
          value={name}
          placeholder="Nome da categoria"
        />
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
  );
};

const styles = StyleSheet.create({
  container: {
    width: 327,
    height: 242,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  text: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  textsub: {
    color: "#000",
    fontSize: 14,
    textAlign: "center",
    marginTop: 22,
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

export default CardAdd;
