import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CardBar from "./cards/cardbar";
import CardTotal from "./cardtotal";
import Button from "../components/button";
import Navtext from "../components/navtext";
import CardAdd from "./cards/cardadd";

const Screen = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [receitas, setReceitas] = React.useState([]);
  const [name, setName] = React.useState("");

  return (
    <View>
      <Navtext text="Receitas" />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Valor adquirido esse mês:</Text>
          <Text style={styles.title}>R$3300,00</Text>
          <CardBar />
          <CardTotal
            key={20}
            nome={"Salário"}
            valor={"3300,00"}
            mostrarDetalhes={true}
            tipo1={"Salário"}
            tipo2={"Horas Extras"}
            receita1={"2900,00"}
            receita2={"400,00"}
          />
          {receitas.map((receita) => (
            <CardTotal
              key={receita.id}
              nome={receita.name}
              valor={receita.value}
            />
          ))}
          <Button
            content={"Adicionar Categoria"}
            onPress={() => {
              setModalOpen(true);
            }}
          />
        </View>
      </ScrollView>
      {modalOpen && (
        <View style={styles.modal}>
          <CardAdd
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 72,
    marginTop: 80,
    height: "100%",
  },
  texthome: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
    marginTop: 50,
    height: 42,
    zIndex: 1,
  },
  title: {
    fontSize: 44,
    fontWeight: "bold",
    color: "#101B22",
    marginTop: 4,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    color: "#4C5459",
    marginTop: 16,
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

export default Screen;
