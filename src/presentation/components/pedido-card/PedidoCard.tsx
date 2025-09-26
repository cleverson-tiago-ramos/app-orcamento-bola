import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ChevronRight } from "lucide-react-native";
import { Orcamento } from "@/core/domain/entities/Orcamento";
import { styles } from "./styles";

interface PedidoCardProps {
  item: Orcamento;
}

// Função para formatar a moeda
const formatCurrency = (value: number) => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

// Função para obter o estilo do status
const getStatusStyle = (status: Orcamento["status"]) => {
  switch (status) {
    case "aberto":
      return styles.statusAberto;
    case "aprovado":
      return styles.statusAprovado;
    case "concluido":
      return styles.statusConcluido;
    case "cancelado":
      return styles.statusCancelado;
    default:
      return {};
  }
};

export function PedidoCard({ item }: PedidoCardProps) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.idText}>
          Pedido #{item.id.toString().padStart(4, "0")}
        </Text>
        <Text style={styles.title}>{item.clienteNome}</Text>
        <Text style={styles.value}>{formatCurrency(item.valorTotal)}</Text>
      </View>
      <View style={[styles.statusContainer, getStatusStyle(item.status)]}>
        <Text style={styles.statusText}>{item.status.toUpperCase()}</Text>
      </View>
      <ChevronRight color="#B0B0B0" size={24} style={styles.chevron} />
    </TouchableOpacity>
  );
}
