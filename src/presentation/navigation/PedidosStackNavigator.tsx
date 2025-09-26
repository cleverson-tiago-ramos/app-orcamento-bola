//src/presentation/navigation/PedidosStackNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PedidosScreen } from "../screens/pedidos/PedidosScreen";
import { NovoPedidoScreen } from "../screens/pedidos/new/NewPedidoScreen";

const Stack = createNativeStackNavigator();

export function PedidosStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PedidosList" component={PedidosScreen} />
      <Stack.Screen name="NewPedido" component={NovoPedidoScreen} />
    </Stack.Navigator>
  );
}
