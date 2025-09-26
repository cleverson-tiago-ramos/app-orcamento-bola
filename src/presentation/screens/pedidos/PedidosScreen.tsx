import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Hook com a lógica
import { usePedidos } from "./usePedidos";
// Estilos
import { styles } from "./styles";

// Componentes reutilizáveis
import { Header } from "@/presentation/components/header/Header";
import { SearchBar } from "@/presentation/components/search-bar/SearchBar";
import { TabFilter } from "@/presentation/components/tab-filter/TabFilter";
import { EmptyState } from "@/presentation/components/empty-state/EmptyState";
import { Fab } from "@/presentation/components/fab/Fab";
import { PedidoCard } from "@/presentation/components/pedido-card/PedidoCard"; // <-- Importe o Card

export function PedidosScreen() {
  const { activeTab, pedidos, loading, handleTabPress, handleFabPress } =
    usePedidos();

  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator size="large" color="#007AFF" />;
    }
    if (pedidos.length === 0) {
      return <EmptyState />;
    }

    return (
      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.id.toString()}
        // 👇 A MUDANÇA É AQUI. TROQUE O <Text> PELO <PedidoCard />
        renderItem={({ item }) => <PedidoCard item={item} />}
        contentContainerStyle={{ paddingTop: 12 }} // Adiciona um espaço no topo da lista
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Pedidos" />
      <SearchBar />
      <TabFilter
        tabs={["Últimos", "30 dias", "60 dias", "Concluídos"]}
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />

      <View style={styles.content}>{renderContent()}</View>

      <Fab onPress={handleFabPress} />
    </SafeAreaView>
  );
}
