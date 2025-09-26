import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BarChart3,
  CalendarDays,
  DollarSign,
  Files,
  Plus,
} from "lucide-react-native";

// Importe suas telas e o StackNavigator
import { DashboardScreen } from "@/presentation/screens/dashboard/DashboardScreen";
import { AgendaScreen } from "@/presentation/screens/agenda/AgendaScreen";
import { FinanceiroScreen } from "@/presentation/screens/financeiro/FinanceiroScreen";
import { PedidosStackNavigator } from "./PedidosStackNavigator";
import { FabModal } from "@/presentation/components/fab-modal/FabModal";

const Tab = createBottomTabNavigator();

// Este é um componente "dummy" que não faz nada.
// Usaremos ele apenas como um placeholder para o nosso botão.
const FabDummyComponent = () => null;

export function MainTabNavigator() {
  const [isFabModalVisible, setIsFabModalVisible] = useState(false);

  const activeColor = "#F4781F";
  const inactiveColor = "#4A4A4A";

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: activeColor,
          tabBarInactiveTintColor: inactiveColor,
          tabBarShowLabel: true,
          tabBarStyle: {
            height: 60,
            borderTopWidth: 1,
            borderTopColor: "#F0F0F0",
            backgroundColor: "#FFFFFF",
          },
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            tabBarIcon: ({ color }) => <BarChart3 color={color} size={24} />,
          }}
        />
        <Tab.Screen
          name="PedidosStack"
          component={PedidosStackNavigator}
          options={{
            title: "Pedidos",
            tabBarIcon: ({ color }) => <Files color={color} size={24} />,
          }}
        />
        {/* --- O Botão Central --- */}
        <Tab.Screen
          name="Add"
          component={FabDummyComponent} // Usa o componente dummy
          options={{
            tabBarButton: () => (
              <TouchableOpacity
                style={styles.fabContainer}
                onPress={() => setIsFabModalVisible(true)}
              >
                <Plus color="#FFFFFF" size={32} />
              </TouchableOpacity>
            ),
          }}
        />
        {/* -------------------- */}
        <Tab.Screen
          name="Agenda"
          component={AgendaScreen}
          options={{
            tabBarIcon: ({ color }) => <CalendarDays color={color} size={24} />,
          }}
        />
        <Tab.Screen
          name="Financeiro"
          component={FinanceiroScreen}
          options={{
            tabBarIcon: ({ color }) => <DollarSign color={color} size={24} />,
          }}
        />
      </Tab.Navigator>

      {/* O Modal que será aberto */}
      <FabModal
        isVisible={isFabModalVisible}
        onClose={() => setIsFabModalVisible(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  fabContainer: {
    top: -25, // Puxa o botão para cima
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FF3B30",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
