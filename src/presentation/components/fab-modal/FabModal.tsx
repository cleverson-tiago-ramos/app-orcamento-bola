// src/presentation/components/fab-modal/FabModal.tsx
import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import {
  ReceiptText,
  ShoppingCart,
  BriefcaseBusiness,
  Package,
  CalendarDays,
  Wallet,
  ClipboardPlus,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import type {
  RootTabParamList,
  PedidosStackParamList,
} from "@/types/navigation";
import { styles } from "./styles";

interface FabModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const TAB_PEDIDOS: keyof RootTabParamList = "PedidosStack";

export function FabModal({ isVisible, onClose }: FabModalProps) {
  const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();

  /** Navega para uma screen dentro do PedidosStack com tipagem segura */
  const goToPedidos = (screenName?: keyof PedidosStackParamList) => {
    onClose();
    if (screenName) {
      navigation.navigate("PedidosStack", { screen: screenName });
    } else {
      navigation.navigate("PedidosStack");
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.modalContent}>
          <Text style={styles.mainTitle}>Novo</Text>

          {/* ===== Pedido ===== */}
          <Text style={styles.sectionTitle}>Pedido</Text>

          <View style={styles.cardRow}>
            {/* Serviço */}
            <TouchableOpacity
              style={styles.cardButtonLeft}
              onPress={() => goToPedidos("NewServico")}
              activeOpacity={0.9}
            >
              <View
                style={[
                  styles.iconCircle,
                  { backgroundColor: "#F4781F", borderColor: "transparent" },
                ]}
              >
                <BriefcaseBusiness size={22} color="#FFFFFF" />
              </View>
              <Text style={styles.cardButtonText}>Serviço</Text>
            </TouchableOpacity>

            {/* PDV */}
            <TouchableOpacity
              style={styles.cardButtonRight}
              onPress={() => goToPedidos("PDVRapida")}
              activeOpacity={0.9}
            >
              <View
                style={[
                  styles.iconCircle,
                  { backgroundColor: "#F4781F", borderColor: "transparent" },
                ]}
              >
                <ReceiptText size={22} color="#FFFFFF" />
              </View>
              <View>
                <Text style={styles.cardButtonText}>PDV</Text>
                <Text style={styles.cardButtonSubText}>Venda Rápida</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.cardRow}>
            {/* Venda */}
            <TouchableOpacity
              style={styles.cardButtonLeft}
              onPress={() => goToPedidos("NovoVenda")}
              activeOpacity={0.9}
            >
              <View
                style={[
                  styles.iconCircle,
                  { backgroundColor: "#F4781F", borderColor: "transparent" },
                ]}
              >
                <ShoppingCart size={22} color="#FFFFFF" />
              </View>
              <Text style={styles.cardButtonText}>Venda</Text>
            </TouchableOpacity>
          </View>

          {/* ===== Cadastro ===== */}
          <Text style={styles.sectionTitle}>Cadastro</Text>

          <View style={styles.gridRow}>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => goToPedidos("CadastroReceita")}
              activeOpacity={0.9}
            >
              <View style={styles.iconCircle}>
                <ClipboardPlus size={22} color="#F4781F" />
              </View>
              <Text style={styles.gridItemText}>Receita</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => goToNested(TAB_PEDIDOS, "CadastroDespesa")}
              activeOpacity={0.9}
            >
              <View style={styles.iconCircle}>
                <Wallet size={22} color="#F4781F" />
              </View>
              <Text style={styles.gridItemText}>Despesa</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => goToNested(TAB_PEDIDOS, "CadastroAgenda")}
              activeOpacity={0.9}
            >
              <View style={styles.iconCircle}>
                <CalendarDays size={22} color="#F4781F" />
              </View>
              <Text style={styles.gridItemText}>Agenda</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => goToNested(TAB_PEDIDOS, "CadastroServico")}
              activeOpacity={0.9}
            >
              <View style={styles.iconCircle}>
                <BriefcaseBusiness size={22} color="#F4781F" />
              </View>
              <Text style={styles.gridItemText}>Serviço</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => goToNested(TAB_PEDIDOS, "CadastroProduto")}
              activeOpacity={0.9}
            >
              <View style={styles.iconCircle}>
                <Package size={22} color="#F4781F" />
              </View>
              <Text style={styles.gridItemText}>Produto</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
