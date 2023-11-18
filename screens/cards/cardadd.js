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
<<<<<<< HEAD
        Coloque a informação sobre essa categoria:
      </Text>
      <View style={styles.inputview}>
        <Text style={styles.textlabel}>Nome:</Text>
=======
        Coloque a informação sobre essa categoria
      </Text>
      <View style={styles.inputview}>
        <Text>Nome:</Text>
>>>>>>> 37ffd184bdaca940260d713b4602ff2706a2ab3c
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 37ffd184bdaca940260d713b4602ff2706a2ab3c
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
<<<<<<< HEAD
    marginTop: 32,
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

export default CardAdd;
