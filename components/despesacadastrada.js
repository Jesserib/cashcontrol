import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Despesacadastrada({desc, value}) {
    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <Text style={styles.text}>{desc}</Text>
                <Text style={styles.value}>R${value}</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon name="angle-right" size={30} color="#000" style={styles.icon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        top: 0,
        width: 343,
        borderWidth: 1,
        borderColor: "#D8DAE5",
        borderRadius: 24,
        marginTop: 200,
        padding: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    column: {
        flexDirection: 'column',
    },
    text: {
        fontSize: 16,
    },
    value: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: "bold",
        color: "#FF8700",
    },
    iconContainer: {
        marginLeft: 'auto',
    },
    icon: {
        marginRight: 10,
    },
});
