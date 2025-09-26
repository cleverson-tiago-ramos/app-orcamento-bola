import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/presentation/components/header/Header";
import { styles } from "./styles";
import { useDashboard } from "./useDashboard";

export function DashboardScreen() {
  const {} = useDashboard();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Dashboard" />
      <View style={styles.content}>
        <Text style={styles.text}>Tela do Dashboard</Text>
      </View>
    </SafeAreaView>
  );
}
