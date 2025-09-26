//src/presentation/screens/PedidosScreen.tsx
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Caminhos corrigidos para a estrutura de pastas
import { Header } from "@/presentation/components/header/Header";
import { SearchBar } from "@/presentation/components/search-bar/SearchBar";
import { TabFilter } from "@/presentation/components/tab-filter/TabFilter";
import { EmptyState } from "@/presentation/components/empty-state/EmptyState";
import { Fab } from "@/presentation/components/fab/Fab";

export function PedidosScreen() {
  const [activeTab, setActiveTab] = useState("Últimos");

  return (
    <SafeAreaView style={styles.container}>
      {/* Componentes sem as chaves {} */}
      <Header title="Pedidos" />
      <SearchBar />
      <TabFilter
        tabs={["Últimos", "30 dias", "60 dias", "Concluídos"]}
        activeTab={activeTab}
        onTabPress={setActiveTab}
      />

      <View style={styles.content}>
        <EmptyState />
      </View>

      <Fab onPress={() => console.log("Abrir tela de novo pedido")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
