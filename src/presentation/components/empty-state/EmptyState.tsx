import React from "react";
import { View, Text } from "react-native";
import { FileWarning } from "lucide-react-native";
import { styles } from "./styles";

export function EmptyState() {
  return (
    <View style={styles.container}>
      <FileWarning color="#B0B0B0" size={80} strokeWidth={1} />
      <Text style={styles.title}>Nenhum Pedido</Text>
      <Text style={styles.description}>
        Crie pedidos para registrar uma intenção de venda ou prestação de
        serviço.
      </Text>
    </View>
  );
}
