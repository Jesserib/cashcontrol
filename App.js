import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
<<<<<<< HEAD
import {  StyleSheet, } from "react-native";
=======
>>>>>>> 37ffd184bdaca940260d713b4602ff2706a2ab3c
import Screen from "./screens/screen";
import LoginScreen from "./screens/login";
import BottomMenu from "./components/navbar";
import Dashboard from "./screens/dashboard";
import Despesas from "./screens/despesas";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={() => <BottomMenu />}>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Receitas"
          component={Screen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Despesas"
          component={Despesas}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
<<<<<<< HEAD


=======
>>>>>>> 37ffd184bdaca940260d713b4602ff2706a2ab3c
