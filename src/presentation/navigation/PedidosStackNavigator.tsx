//src/presentation/navigation/PedidosStackNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PedidosScreen } from "../screens/pedidos/PedidosScreen";
import { NewPedidoScreen } from "../screens/pedidos/new/NewPedidoScreen";
import { NewServicoScreen } from "@/presentation/screens/servico/NewServicoScreen"; // Importe a nova tela

const Stack = createNativeStackNavigator();

export function PedidosStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PedidosList" component={PedidosScreen} />
      <Stack.Screen name="NewPedido" component={NewPedidoScreen} />
      <Stack.Screen name="NovoServico" component={NewServicoScreen} />
    </Stack.Navigator>
  );
}
