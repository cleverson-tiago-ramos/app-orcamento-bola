import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/presentation/components/header/Header";
import { styles } from "./styles";
import { useFinanceiro } from "./useFinanceiro";

export function FinanceiroScreen() {
  const {} = useFinanceiro();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Financeiro" />
      <View style={styles.content}>
        <Text style={styles.text}>Tela Financeira</Text>
      </View>
    </SafeAreaView>
  );
}
