import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  X,
  Calendar,
  ChevronRight,
  PlusCircle,
  ScanLine,
  Paperclip,
  ImageIcon,
  DollarSign,
  Truck,
} from "lucide-react-native";
import { styles } from "./styles";

const primaryColor = "#FF3B30";

export function NewServicoScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <X color={primaryColor} size={28} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Novo Pedido (Serviço)</Text>
      </View>

      <ScrollView style={styles.container}>
        {/* Date and Client */}
        <TouchableOpacity style={styles.formRow}>
          <Text style={styles.label}>Data</Text>
          <View style={styles.valueContainer}>
            <Text style={styles.valueText}>26/09/2025</Text>
            <Calendar color="#8A8A8E" size={24} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.formRow}>
          <Text style={styles.label}>Cliente</Text>
          <View style={styles.valueContainer}>
            <ChevronRight color="#8A8A8E" size={24} />
          </View>
        </TouchableOpacity>

        {/* Action Buttons */}
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

        {/* Summary */}
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
        {/* Adicione mais seções aqui se necessário, como Pagamento, Garantia, etc. */}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
