//src/presentation/screens/pedidos/PedidosScreen.tsx
import React from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
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

export function PedidosScreen() {
  // Pegamos toda a lógica e os dados do nosso hook
  const { activeTab, pedidos, loading, handleTabPress, handleFabPress } =
    usePedidos();

  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator size="large" color="#007AFF" />;
    }
    if (pedidos.length === 0) {
      return <EmptyState />;
    }
    // Futuramente, aqui renderizaremos a FlatList com os pedidos
    return (
      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.clienteNome}</Text>}
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
