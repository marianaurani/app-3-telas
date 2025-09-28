import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartaoMercadoPago, PerfilIfood } from "./Screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cartao">
        <Stack.Screen
          name="Cartao"
          component={CartaoMercadoPago}
          options={{ title: "Cartão Mercado Pago" }}
        />
        <Stack.Screen
          name="Perfil"
          component={PerfilIfood}
          options={{ title: "Perfil iFood" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
