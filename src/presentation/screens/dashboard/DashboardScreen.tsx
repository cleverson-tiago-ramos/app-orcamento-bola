import React from "react";
import { View, Text, SafeAreaView } from "react-native";
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
