import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Button = ({content}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        console.log("Botão pressionado!");
      }}
    >
      <Icon name="plus" size={16} color="#fff" style={styles.icon} />
      <Text style={styles.buttonText}>{content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center ",
    alignItems: "center",
    backgroundColor: "#5398BE",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 24,
    marginTop: 24,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  icon: {
    marginRight: 8,
  },
});

export default Button;
