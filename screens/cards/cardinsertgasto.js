import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Despesacadastrada from "../../components/despesacadastrada";

export default function Insertgasto() {
    return (
        <View style={styles.container}>
            {/* //Recebe a inseção de um novo gasto */}
            <Despesacadastrada />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
});
