import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Header } from "@/presentation/components/header/Header";
import { styles } from "./styles";
import { useAgenda } from "./useAgenda";

export function AgendaScreen() {
  const {} = useAgenda();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Agenda" />
      <View style={styles.content}>
        <Text style={styles.text}>Tela da Agenda</Text>
      </View>
    </SafeAreaView>
  );
}
