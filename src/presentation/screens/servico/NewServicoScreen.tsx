// src/presentation/screens/servico/NewServicoScreen.tsx
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";

import type { PedidosStackParamList, Cliente } from "@/types/navigation";
import { DateField } from "@/presentation/components/date-field";
import { ClienteField } from "@/presentation/components/form/clientes/ClienteField";

import {
  X,
  Calendar as CalendarIcon,
  PlusCircle,
  ScanLine,
  DollarSign,
  Truck,
  ChevronRight,
} from "lucide-react-native";
import { styles } from "./styles";

const primaryColor = "#FF3B30";

export function NewServicoScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<PedidosStackParamList>>();
  const route = useRoute<RouteProp<PedidosStackParamList, "NewServico">>();

  // Estado
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [cliente, setCliente] = useState<Cliente | undefined>();

  // Atualiza cliente vindo da lista
  useEffect(() => {
    if (route.params?.cliente) setCliente(route.params.cliente);
  }, [route.params?.cliente]);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <X color={primaryColor} size={28} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Novo Pedido (Serviço)</Text>
      </View>

      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        {/* ===== Data (DateField encapsula o modal do paper-dates) ===== */}
        <DateField
          label="Data"
          value={selectedDate}
          onChange={setSelectedDate}
          // usa os estilos da tela para manter o visual consistente
          containerStyle={styles.formRow}
          labelStyle={styles.label}
          valueStyle={styles.valueText}
          locale="pt"
          modalLabel="Selecione a data"
          okText="OK"
        />

        {/* ===== Cliente ===== */}
        <ClienteField
          label="Cliente"
          value={cliente?.nome}
          onPress={() => navigation.navigate("ClientesList")}
          styles={styles}
        />

        {/* ===== Ações ===== */}
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={styles.actionButton}>
            <PlusCircle color={primaryColor} size={24} />
            <Text style={styles.actionButtonText}>Adicionar Serviços</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <PlusCircle color={primaryColor} size={24} />
            <Text style={styles.actionButtonText}>Adicionar Produtos</Text>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <ScanLine color="#8A8A8E" size={24} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <PlusCircle color={primaryColor} size={24} />
            <Text style={styles.actionButtonText}>Adicionar Despesas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <PlusCircle color={primaryColor} size={24} />
            <Text style={styles.actionButtonText}>Adicionar Fotos</Text>
            <View style={styles.proBadge}>
              <Text style={styles.proBadgeText}>PRO</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* ===== Resumo ===== */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>R$ 0,00</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={[styles.summaryLabel, styles.summaryTotal]}>
              Total
            </Text>
            <Text style={styles.summaryTotal}>R$ 0,00</Text>
          </View>

          <View style={styles.buttonsRow}>
            <TouchableOpacity style={[styles.halfButton, { marginRight: 8 }]}>
              <DollarSign color="#333" size={20} />
              <Text style={styles.buttonText}>Descontos</Text>
              <ChevronRight color="#8A8A8E" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.halfButton, { marginLeft: 8 }]}>
              <Truck color="#333" size={20} />
              <Text style={styles.buttonText}>Frete</Text>
              <ChevronRight color="#8A8A8E" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
