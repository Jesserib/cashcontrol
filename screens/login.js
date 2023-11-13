import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email && password === 123) {
      alert("Login bem-sucedido!");
    } else {
      alert("Senha ou email INCORRETO!");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Bem-vindo à sua conta!</Text>
      </View>
      <View style={styles.inputview}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

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
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 150,
    justifyContent: "flex-start",
    marginBottom: 50,
  },
  input: {
    borderRadius: 12,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 10,
    marginTop:0,
  },
  loginButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
  },
  signupText: {
    marginTop: 15,
    fontSize: 12,
    justifyContent: "center",
  },
  subtitle: {
    justifyContent:"center"
  }
});

export default LoginScreen;
