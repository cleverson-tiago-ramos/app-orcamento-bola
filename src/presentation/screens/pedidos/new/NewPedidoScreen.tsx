import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Header } from "@/presentation/components/header/Header";
import { styles } from "./styles";

export function NovoPedidoScreen() {
  // <-- Verifique se o nome da função está correto aqui
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Novo Pedido" />
      <View style={styles.container}>
        <Text style={styles.title}>
          Aqui será o formulário de criação de pedido.
        </Text>
      </View>
    </SafeAreaView>
  );
}
