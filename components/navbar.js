// BottomMenu.js
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const BottomMenu = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigateToScreen("Dashboard")}
      >
        <Icon name="home" size={24} color="#9FA4A7" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigateToScreen("ChartScreen")}
      >
        <Icon name="pie-chart" size={24} color="#9FA4A7" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigateToScreen("DollarScreen")}
      >
        <Icon name="dollar" size={24} color="#9FA4A7" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigateToScreen("Login")}
      >
        <Icon name="user" size={24} color="#9FA4A7" />
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
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    zIndex:1,

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
