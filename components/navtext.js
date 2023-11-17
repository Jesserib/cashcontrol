import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icones from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export default function Navtext({ text }) {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateToScreen("Dashboard")}>
        <Icon name="angle-left" size={34} color="#000" style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.texthome}>{text}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Icones name="plus" size={28} color="#000" style={styles.icones} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1,
    marginTop: 50,
  },

  texthome: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    fontSize: 25,
    left: 9,
    fontWeight: "bold",
    color: "#000",
    height: 40,
    width: "auto",
  },
  icon: {
    left: 14,
  },
  icones: {
    right: 14,
  },
});
