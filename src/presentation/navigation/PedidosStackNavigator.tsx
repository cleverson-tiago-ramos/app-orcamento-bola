//src/presentation/navigation/PedidosStackNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { PedidosStackParamList } from "@/types/navigation";

import { PedidosScreen } from "../screens/pedidos/PedidosScreen";
import { NewPedidoScreen } from "../screens/pedidos/new/NewPedidoScreen";
import { NewServicoScreen } from "@/presentation/screens/servico/NewServicoScreen"; // Importe a nova tela
import { ClientesListScreen } from "@/presentation/screens/clientes/ClientesListScreen"; // 👈 nova tela
const Stack = createNativeStackNavigator<PedidosStackParamList>();

export function PedidosStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PedidosList" component={PedidosScreen} />
      <Stack.Screen name="NewPedido" component={NewPedidoScreen} />
      <Stack.Screen name="NewServico" component={NewServicoScreen} />
      {/* clientes */}
      <Stack.Screen name="ClientesList" component={ClientesListScreen} />
      {/* Registre aqui se for navegar para elas pelo modal */}
      {/* <Stack.Screen name="PDVRapida" component={PDVRapidaScreen} /> */}
      {/* <Stack.Screen name="NovoVenda" component={NovoVendaScreen} /> */}
      {/* <Stack.Screen name="CadastroReceita" component={CadastroReceitaScreen} /> */}
      {/* ... demais cadastros */}
    </Stack.Navigator>
  );
}
