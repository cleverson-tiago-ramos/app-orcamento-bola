import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

// Ainda vamos criar estes componentes:
// import { Header } from '@/presentation/components/Header';
// import { SearchBar } from '@/presentation/components/SearchBar';
// import { TabFilter } from '@/presentation/components/TabFilter';
// import { EmptyState } from '@/presentation/components/EmptyState';
// import { Fab } from '@/presentation/components/Fab';

export function PedidosScreen() {
  const [activeTab, setActiveTab] = useState("Últimos");

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header title="Pedidos" /> */}
      {/* <SearchBar /> */}
      {/* <TabFilter
        tabs={['Últimos', '30 dias', '60 dias', 'Concluídos']}
        activeTab={activeTab}
        onTabPress={setActiveTab}
      /> */}

      <View style={styles.content}>{/* <EmptyState /> */}</View>

      {/* <Fab onPress={() => console.log('Abrir tela de novo pedido')} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA", // Um cinza bem claro para o fundo
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
