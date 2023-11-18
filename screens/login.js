import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email === "Jessé" && password === "123") {
      alert("Login bem-sucedido!");
    } else {
      alert("Senha ou email/Usuário Incorreto!");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/Logotype.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Bem-vindo à sua conta!</Text>
        <Text style={styles.text}>Conquiste o seu controle financeiro!</Text>
      </View>
      <View style={styles.inputview}>
        <Text style={styles.textLabel}>E-mail ou Usuário:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.textLabel}>Senha:</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={!showPassword}
          />
        </View>
      </View>
      <View style={styles.subtitle}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>Não tem uma conta? Cadastrar</Text>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#FEFEFE",
    paddingBottom:120

  },
  image: {
    width: 73,
    height: 55,
    marginTop: 104,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
  },
  text: {
    fontSize: 18,
    marginBottom: 32,
  },

  textLabel: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    borderRadius: 12,
    height: 56,
    borderColor: "#5398BE",
    color: "#4C5459",
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 24,
    marginTop: 0,
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: "#5398BE",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    height: 56,
    width: "100%",
    marginTop: 32,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
  },
  signupText: {
    marginTop: 15,
    fontSize: 14,
    justifyContent: "center",
  },
  subtitle: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
