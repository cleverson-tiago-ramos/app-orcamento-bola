import React from "react";
import { View, Text, SafeAreaView } from "react-native";
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
