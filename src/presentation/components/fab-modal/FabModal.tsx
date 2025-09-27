//src/presentation/components/fab-modal/FabModal.tsx
import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import {
  ReceiptText,
  ShoppingCart,
  BriefcaseBusiness,
  Package,
  CalendarDays,
  Wallet,
  DollarSign,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

interface FabModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export function FabModal({ isVisible, onClose }: FabModalProps) {
  const navigation = useNavigation();

  const handleOptionPress = (screenName: string) => {
    onClose();
    navigation.navigate(screenName as never);
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
          {/* Seção "Novo" */}
          <Text style={styles.sectionTitle}>Novo</Text>

          <View style={styles.buttonGrid}>
            {/* Serviço */}
            <TouchableOpacity
              style={styles.cardButton}
              onPress={() => handleOptionPress("NovoServico")}
              activeOpacity={0.9}
              hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
            >
              <View style={styles.iconBubble}>
                <BriefcaseBusiness size={22} color="#FFFFFF" />
              </View>

              <View style={styles.textCol}>
                <Text style={styles.cardButtonTitle}>Serviço</Text>
                <Text style={styles.cardButtonSubText}>—</Text>
              </View>
            </TouchableOpacity>

            {/* PDV */}
            <TouchableOpacity
              style={styles.cardButton}
              onPress={() => handleOptionPress("PDVRapida")}
              activeOpacity={0.9}
              hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
            >
              <View style={styles.iconBubble}>
                <ReceiptText size={22} color="#FFFFFF" />
              </View>

              <View style={styles.textCol}>
                <Text style={styles.cardButtonTitle}>PDV</Text>
                <Text style={styles.cardButtonSubText}>Venda Rápida</Text>
              </View>
            </TouchableOpacity>

            {/* Venda */}
            <TouchableOpacity
              style={styles.cardButton}
              onPress={() => handleOptionPress("NovoVenda")}
              activeOpacity={0.9}
              hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
            >
              <View style={styles.iconBubble}>
                <ShoppingCart size={22} color="#FFFFFF" />
              </View>

              <View style={styles.textCol}>
                <Text style={styles.cardButtonTitle}>Venda</Text>
                <Text style={styles.cardButtonSubText}>—</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Seção "Cadastro" (mantida) */}
          <Text style={styles.sectionTitle}>Cadastro</Text>
          <View style={styles.gridRow}>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => handleOptionPress("CadastroReceita")}
            >
              <DollarSign size={28} color="#3A3A3A" />
              <Text style={styles.gridItemText}>Receita</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => handleOptionPress("CadastroDespesa")}
            >
              <Wallet size={28} color="#3A3A3A" />
              <Text style={styles.gridItemText}>Despesa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => handleOptionPress("CadastroAgenda")}
            >
              <CalendarDays size={28} color="#3A3A3A" />
              <Text style={styles.gridItemText}>Agenda</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => handleOptionPress("CadastroServico")}
            >
              <BriefcaseBusiness size={28} color="#3A3A3A" />
              <Text style={styles.gridItemText}>Serviço</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => handleOptionPress("CadastroProduto")}
            >
              <Package size={28} color="#3A3A3A" />
              <Text style={styles.gridItemText}>Produto</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
