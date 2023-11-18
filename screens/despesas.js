import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Navtext from "../components/navtext";
import Button from "../components/button";
<<<<<<< HEAD
import Despesacadastrada from "../components/despesacadastrada";
import Cardgasto from "./cards/cardgasto";

const Despesas = ({props}) => {

  const [modalOpen, setModalOpen] = React.useState(false);
  const [receitas, setReceitas] = React.useState([]);
  const [name, setName] = React.useState("");

    return (
      <View style={styles.container}>
        <Navtext text="Receitas" />
        <View style={styles.subContainer}>
          <Text style={styles.title}>Freelance</Text>
          <Text style={styles.title2}>Salário</Text>
        </View>
        <Text style={styles.titlevalue}>O que você recebeu com:</Text>
        <Text style={styles.negrito}>Salário</Text>
        <Text style={styles.valor}>R$0,00</Text>
        <Button
          content={"Adicionar Receita"}
          onPress={() => {
            setModalOpen(true);
          }}
        />
        {modalOpen && (
          <View style={styles.modal}>
            <Cardgasto
              handleClose={() => setModalOpen(false)}
              handleSave={() => {
                setReceitas([...receitas, { id: 1, name: name, value: 0 }]);
                setModalOpen(false);
                setName("");
              }}
              inputHandler={(name) => setName(name)}
              name={name}
            />
          </View>
        )}
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "bottom",
    width: "100%",
    height: 36,
    marginTop: 100,
    marginRight: 16,
    borderColor: "#EAE9F0",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    color: "#5398BE",
    borderColor: "#5398BE",
    borderBottomWidth: 2,
    marginRight: 12,
    paddingHorizontal: 8,
  },
  title2: {
    fontSize: 18,
    color: "#4C5459",
    marginRight: 12,
    paddingHorizontal: 8,
  },
  valor: {
    fontSize: 44,
    fontWeight: "bold",
    color: "#101B22",
    marginTop: 16,
    marginBottom: 24,
  },
  titlevalue: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 18,
    lineHeight: 24,
    width: 210,
    color: "#4C5459",
    marginTop: 30,
  },
  negrito: {
    fontWeight: "bold",
    marginTop: 8,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 18,
    lineHeight: 24,
    width: 210,
    color: "#101B22",
  },
    modal: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    zIndex:1
    },

=======

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
>>>>>>> 37ffd184bdaca940260d713b4602ff2706a2ab3c
});

export default Despesas;
