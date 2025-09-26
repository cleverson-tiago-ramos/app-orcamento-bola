import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
