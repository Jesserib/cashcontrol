import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Navtext from "../components/navtext";
import Button from "../components/button";
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

});

export default Despesas;
