// src/presentation/screens/servico/NewScreen.tsx
import React from "react";
import { View, Text } from "react-native";
import { Header } from "@/presentation/components/header/Header";
import { SafeAreaView } from "react-native-safe-area-context";

export function NewServicoScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Novo Serviço" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Tela de Novo Serviço</Text>
      </View>
    </SafeAreaView>
  );
}
