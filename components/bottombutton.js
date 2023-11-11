// BottomMenu.js
import React from "react";
import { View, TouchableOpacity, StyleSheet,} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Você pode mudar para o ícone que preferir

const BottomMenu = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon}>
        <Icon name="home" size={30} color="#9FA4A7" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Icon name="pie-chart" size={30} color="#9FA4A7" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Icon name="dollar" size={30} color="#9FA4A7" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Icon name="user" size={30} color="#9FA4A7" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: "#F5F5F5",
  },
  icon: {
    flex: 1,
    alignItems: "center",
  },
});

export default BottomMenu;
