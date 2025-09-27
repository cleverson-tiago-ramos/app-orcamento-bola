// src/presentation/screens/servico/NewServicoScreen.tsx
import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { DateField } from "@/presentation/components/date-field";
import {
  X,
  Calendar as CalendarIcon,
  ChevronRight,
  PlusCircle,
  ScanLine,
  DollarSign,
  Truck,
} from "lucide-react-native";
import { styles } from "./styles";

const primaryColor = "#FF3B30";

export function NewServicoScreen() {
  const navigation = useNavigation();
  const [date, setDate] = useState<Date>(new Date());

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <X color={primaryColor} size={28} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Novo Pedido (Serviço)</Text>
      </View>

      {/* Conteúdo */}
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        {/* Data */}
        <DateField label="Data" value={date} onChange={setDate} />

        {/* Cliente */}
        <TouchableOpacity style={styles.formRow}>
          <Text style={styles.label}>Cliente</Text>
          <View style={styles.valueContainer}>
            <ChevronRight color="#8A8A8E" size={24} />
          </View>
        </TouchableOpacity>

        {/* Ações */}
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

        {/* Resumo */}
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
