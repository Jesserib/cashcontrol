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
        Coloque a informação sobre essa categoria:
      </Text>
      <View style={styles.inputview}>
        <Text style={styles.textlabel}>Nome:</Text>
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
    height: "auto",
    borderRadius: 8,
    paddingHorizontal:24,
    paddingVertical: 24,
    backgroundColor: "#fff",
  },
  text: {
    color: "#101B22",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  textsub: {
    color: "#4C5459",
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
  },
  textlabel: {
    color: "#4C5459",
    fontSize: 16,
    textAlign: "left",
    marginTop: 32,
  },
  inputview: {
    justifyContent: "Left",
  },
  input: {
    borderWidth: 1,
    height: 44,
    width: 279,
    borderRadius: 8,
    marginTop: 8,
    borderColor: "#D8DAE5",
    padding: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
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

export default CardAdd;
