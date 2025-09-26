import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BarChart3,
  CalendarDays,
  DollarSign,
  Files,
} from "lucide-react-native";

// Supondo que você já tenha o StackNavigator para Pedidos
import { PedidosStackNavigator } from "./PedidosStackNavigator";
// E as outras telas
import { DashboardScreen } from "@/presentation/screens/dashboard/DashboardScreen";
import { AgendaScreen } from "@/presentation/screens/agenda/AgendaScreen";
import { FinanceiroScreen } from "@/presentation/screens/financeiro/FinanceiroScreen";

const Tab = createBottomTabNavigator();

export function MainTabNavigator() {
  const activeColor = "#F4781F"; // Azul para ícone ativo
  const inactiveColor = "#4A4A4A"; // Cinza para ícone inativo

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Vamos usar os headers de dentro de cada tela/stack
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarShowLabel: true, // Para mostrar o nome abaixo do ícone
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: "#F0F0F0",
          backgroundColor: "#FFFFFF",
        },
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Dashboard") {
            return <BarChart3 color={color} size={size} />;
          } else if (route.name === "Pedidos") {
            return <Files color={color} size={size} />;
          } else if (route.name === "Agenda") {
            return <CalendarDays color={color} size={size} />;
          } else if (route.name === "Financeiro") {
            return <DollarSign color={color} size={size} />;
          }
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Pedidos" component={PedidosStackNavigator} />
      <Tab.Screen name="Agenda" component={AgendaScreen} />
      <Tab.Screen name="Financeiro" component={FinanceiroScreen} />
    </Tab.Navigator>
  );
}
