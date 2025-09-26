import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BarChart3,
  CalendarDays,
  DollarSign,
  Files,
  Plus,
} from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"; // 1. IMPORTE O HOOK

// ... (seus outros imports)
import { DashboardScreen } from "@/presentation/screens/dashboard/DashboardScreen";
import { AgendaScreen } from "@/presentation/screens/agenda/AgendaScreen";
import { FinanceiroScreen } from "@/presentation/screens/financeiro/FinanceiroScreen";
import { PedidosStackNavigator } from "./PedidosStackNavigator";
import { FabModal } from "@/presentation/components/fab-modal/FabModal";

const Tab = createBottomTabNavigator();
const FabDummyComponent = () => null;

export function MainTabNavigator() {
  const [isFabModalVisible, setIsFabModalVisible] = useState(false);
  const insets = useSafeAreaInsets(); // 2. USE O HOOK PARA PEGAR AS MEDIDAS

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
            // 👇 3. AJUSTE DINÂMICO DOS ESTILOS
            height: 60 + insets.bottom, // A altura agora considera a área segura
            paddingBottom: insets.bottom + 5, // O padding inferior também
            paddingTop: 10,
            borderTopWidth: 1,
            borderTopColor: "#F0F0F0",
            backgroundColor: "#FFFFFF",
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            tabBarIcon: ({ color }) => <BarChart3 color={color} size={28} />,
          }}
        />
        <Tab.Screen
          name="PedidosStack"
          component={PedidosStackNavigator}
          options={{
            title: "Pedidos",
            tabBarIcon: ({ color }) => <Files color={color} size={28} />,
          }}
        />
        <Tab.Screen
          name="Add"
          component={FabDummyComponent}
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
        <Tab.Screen
          name="Agenda"
          component={AgendaScreen}
          options={{
            tabBarIcon: ({ color }) => <CalendarDays color={color} size={28} />,
          }}
        />
        <Tab.Screen
          name="Financeiro"
          component={FinanceiroScreen}
          options={{
            tabBarIcon: ({ color }) => <DollarSign color={color} size={28} />,
          }}
        />
      </Tab.Navigator>

      <FabModal
        isVisible={isFabModalVisible}
        onClose={() => setIsFabModalVisible(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  fabContainer: {
    top: -25,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F4781F", // Corrigindo a cor para combinar
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
