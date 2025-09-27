// src/presentation/components/form/address-sheet/AddressSheet.tsx
import React, { PropsWithChildren } from "react";
import {
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MapPin } from "lucide-react-native";
import { styles } from "./styles";
import { COLORS } from "@/theme/colors";

type Props = {
  visible: boolean;
  onClose: () => void;
  values: {
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
  };
  onChange: {
    setCep: (v: string) => void;
    setRua: (v: string) => void;
    setNumero: (v: string) => void;
    setBairro: (v: string) => void;
    setCidade: (v: string) => void;
    setUf: (v: string) => void;
  };
};

export function AddressSheet({
  visible,
  onClose,
  values,
  onChange,
}: PropsWithChildren<Props>) {
  const { cep, rua, numero, bairro, cidade, uf } = values;
  const { setCep, setRua, setNumero, setBairro, setCidade, setUf } = onChange;

  return (
    <Modal transparent animationType="slide" visible={visible}>
      <TouchableOpacity
        style={styles.addrOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.addrSheet}>
          <View style={styles.addrHeader}>
            <MapPin color={COLORS.brand} size={18} />
            <Text style={styles.addrTitle}>Endereço</Text>
          </View>

          <ScrollView keyboardShouldPersistTaps="handled">
            <View style={styles.addrRow}>
              <TextInput
                placeholder="CEP"
                placeholderTextColor={COLORS.placeholderTextColor}
                style={styles.addrInput}
                keyboardType="number-pad"
                value={cep}
                onChangeText={setCep}
              />
            </View>
            <View style={styles.addrRow}>
              <TextInput
                placeholder="Rua"
                placeholderTextColor={COLORS.placeholderTextColor}
                style={styles.addrInput}
                value={rua}
                onChangeText={setRua}
              />
            </View>
            <View style={[styles.addrRow, { flexDirection: "row", gap: 10 }]}>
              <TextInput
                placeholder="Número"
                placeholderTextColor={COLORS.placeholderTextColor}
                style={[styles.addrInput, { flex: 1 }]}
                keyboardType="number-pad"
                value={numero}
                onChangeText={setNumero}
              />
              <TextInput
                placeholder="Bairro"
                placeholderTextColor={COLORS.placeholderTextColor}
                style={[styles.addrInput, { flex: 2 }]}
                value={bairro}
                onChangeText={setBairro}
              />
            </View>
            <View style={[styles.addrRow, { flexDirection: "row", gap: 10 }]}>
              <TextInput
                placeholder="Cidade"
                placeholderTextColor={COLORS.placeholderTextColor}
                style={[styles.addrInput, { flex: 2 }]}
                value={cidade}
                onChangeText={setCidade}
              />
              <TextInput
                placeholder="UF"
                placeholderTextColor={COLORS.placeholderTextColor}
                style={[styles.addrInput, { flex: 1 }]}
                maxLength={2}
                autoCapitalize="characters"
                value={uf}
                onChangeText={setUf}
              />
            </View>

            <TouchableOpacity
              style={[styles.saveButton, { marginTop: 10 }]}
              onPress={onClose}
            >
              <Text style={styles.saveButtonText}>Salvar Endereço</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
