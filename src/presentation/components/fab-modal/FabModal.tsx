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
  Landmark, // Ícone novo para Despesa
  ClipboardPlus, // Ícone novo para Receita
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
          <Text style={styles.mainTitle}>Novo</Text>

          {/* Seção Pedido */}
          <Text style={styles.sectionTitle}>Pedido</Text>
          <View style={styles.cardRow}>
            <TouchableOpacity
              style={styles.cardButtonLeft}
              onPress={() => handleOptionPress("NovoServico")}
            >
              <BriefcaseBusiness size={24} color="#FF3B30" />
              <Text style={styles.cardButtonText}>Serviço</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardButtonRight}
              onPress={() => handleOptionPress("PDVRapida")}
            >
              <ReceiptText size={24} color="#FF3B30" />
              <View>
                <Text style={styles.cardButtonText}>PDV</Text>
                <Text style={styles.cardButtonSubText}>Venda Rápida</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.cardRow}>
            <TouchableOpacity
              style={styles.cardButtonLeft}
              onPress={() => handleOptionPress("NovoVenda")}
            >
              <ShoppingCart size={24} color="#FF3B30" />
              <Text style={styles.cardButtonText}>Venda</Text>
            </TouchableOpacity>
          </View>

          {/* Seção Cadastro */}
          <Text style={styles.sectionTitle}>Cadastro</Text>
          <View style={styles.gridRow}>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => handleOptionPress("CadastroReceita")}
            >
              <View style={styles.iconCircle}>
                <ClipboardPlus size={24} color="#F4781F" />
              </View>
              <Text style={styles.gridItemText}>Receita</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => handleOptionPress("CadastroDespesa")}
            >
              <View style={styles.iconCircle}>
                <Landmark size={24} color="#F4781F" />
              </View>
              <Text style={styles.gridItemText}>Despesa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => handleOptionPress("CadastroAgenda")}
            >
              <View style={styles.iconCircle}>
                <CalendarDays size={24} color="#F4781F" />
              </View>
              <Text style={styles.gridItemText}>Agenda</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => handleOptionPress("CadastroServico")}
            >
              <View style={styles.iconCircle}>
                <BriefcaseBusiness size={24} color="#F4781F" />
              </View>
              <Text style={styles.gridItemText}>Serviço</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => handleOptionPress("CadastroProduto")}
            >
              <View style={styles.iconCircle}>
                <Package size={24} color="#F4781F" />
              </View>
              <Text style={styles.gridItemText}>Produto</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
