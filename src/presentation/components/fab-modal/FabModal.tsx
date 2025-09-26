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
    onClose(); // Fecha o modal
    navigation.navigate(screenName as never); // Navega para a tela
  };

  return (
    <Modal
      animationType="fade" // Opcional: Animação de entrada
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose} // Fecha o modal ao pressionar voltar no Android
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
            <TouchableOpacity
              style={styles.cardButton}
              onPress={() => handleOptionPress("NovoServico")}
            >
              <BriefcaseBusiness size={32} color="#F4781F" />
              <Text style={styles.cardButtonText}>Serviço</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardButton}
              onPress={() => handleOptionPress("NovoVenda")}
            >
              <ShoppingCart size={32} color="#F4781F" />
              <Text style={styles.cardButtonText}>Venda</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardButton}
              onPress={() => handleOptionPress("PDVRapida")}
            >
              <ReceiptText size={32} color="#F4781F" />
              <Text style={styles.cardButtonText}>PDV</Text>
              <Text style={styles.cardButtonSubText}>Venda Rápida</Text>
            </TouchableOpacity>
          </View>

          {/* Seção "Cadastro" */}
          <Text style={styles.sectionTitle}>Cadastro</Text>
          <View style={styles.gridRow}>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => handleOptionPress("CadastroReceita")}
            >
              <DollarSign size={28} color="#0A84FF" />
              <Text style={styles.gridItemText}>Receita</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => handleOptionPress("CadastroDespesa")}
            >
              <Wallet size={28} color="#0A84FF" />
              <Text style={styles.gridItemText}>Despesa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => handleOptionPress("CadastroAgenda")}
            >
              <CalendarDays size={28} color="#0A84FF" />
              <Text style={styles.gridItemText}>Agenda</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => handleOptionPress("CadastroServico")}
            >
              <BriefcaseBusiness size={28} color="#0A84FF" />
              <Text style={styles.gridItemText}>Serviço</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => handleOptionPress("CadastroProduto")}
            >
              <Package size={28} color="#0A84FF" />
              <Text style={styles.gridItemText}>Produto</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
