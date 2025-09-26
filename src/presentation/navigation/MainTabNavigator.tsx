import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BarChart3,
  CalendarDays,
  DollarSign,
  Files,
} from "lucide-react-native";

// 👇 CORREÇÃO DOS IMPORTS AQUI
import { DashboardScreen } from "@/presentation/screens/DashboardScreen";
import { AgendaScreen } from "@/presentation/screens/AgendaScreen";
import { FinanceiroScreen } from "@/presentation/screens/FinanceiroScreen";
import { PedidosStackNavigator } from "./PedidosStackNavigator"; // <-- Importe o StackNavigator

const Tab = createBottomTabNavigator();

export function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      {/* 👇 CORREÇÃO DO COMPONENTE AQUI */}
      <Tab.Screen name="Pedidos" component={PedidosStackNavigator} />
      <Tab.Screen name="Agenda" component={AgendaScreen} />
      <Tab.Screen name="Financeiro" component={FinanceiroScreen} />
    </Tab.Navigator>
  );
}
