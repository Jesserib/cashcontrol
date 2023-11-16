import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Navtext from "../components/navtext";
import Button from "../components/button";

const Despesas = ({props}) => {
    return (
        <View style={styles.container}>
            <Navtext text="Despesas" />
            <View style={styles.subContainer}>
                <Text style={styles.title}>Contas de Casa</Text>
            </View>
            <Text style={styles.titlevalue}>Suas despesas esse mês com:
                <Text style={styles.negrito}> Contas de Casa</Text>
            </Text>
            <Text style={styles.valor}>R${props}</Text>
           <Button content="Adicionar despesas" />
        </View>
    );
};

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    subContainer: {
        alignItems: "center",
        marginTop: 20,
        width: 300,
        height: 30,
        marginTop: 100,
        borderColor: "#5398BE",
        borderBottomWidth: 2,
        paddingBottom: 5,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#5398BE",
    },
    valor: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#000",
        marginTop: 10,
    },
    titlevalue: {
        justifyContent: "center",
        textAlign: "center",
        fontSize: 16,
        width:210,
        color: "#000",
        marginTop: 30,
    },
    negrito:{
        fontWeight: "bold",
    }
});

export default Despesas;
