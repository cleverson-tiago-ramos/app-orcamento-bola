//src/presentation/screens/clientes/ClienteFormScreen.tsx
import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { PedidosStackParamList, Cliente } from "@/types/navigation";
import { X, PlusCircle, MapPin } from "lucide-react-native";
import { styles } from "./clienteForm.styles";
import { COLORS } from "@/theme/colors";

const BRAND = "#F4781F";

const onlyDigits = (v: string) => v.replace(/\D+/g, "");
const maskPhoneBR = (v: string) => {
  const d = onlyDigits(v).slice(0, 11);
  if (d.length <= 10) return d.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  return d.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
};
const maskCpfCnpj = (v: string) => {
  const d = onlyDigits(v).slice(0, 14);
  if (d.length <= 11)
    return d
      .replace(/^(\d{3})(\d)/, "$1.$2")
      .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1-$2");
  return d
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
};

export function ClienteFormScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<PedidosStackParamList>>();

  // form state
  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [doc, setDoc] = useState("");
  const [obs, setObs] = useState("");

  // address modal
  const [addrOpen, setAddrOpen] = useState(false);
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  const canSave = useMemo(() => nome.trim().length >= 2, [nome]);

  const handleSave = () => {
    if (!canSave) return;
    const novoCliente: Cliente = {
      id: Date.now().toString(),
      nome: nome.trim(),
      telefone: celular || telefone,
    };
    // volta pra NewServico com o cliente escolhido
    navigation.navigate("NewServico", { cliente: novoCliente });
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <X color={COLORS.brand} size={28} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Novo Cliente</Text>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          {/* Nome */}
          <View style={styles.inputRow}>
            <TextInput
              placeholder="Nome"
              placeholderTextColor={COLORS.placeholderTextColor}
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              autoCapitalize="words"
              returnKeyType="next"
            />
          </View>

          {/* Celular */}
          <View style={styles.inputRow}>
            <TextInput
              placeholder="Celular"
              placeholderTextColor={COLORS.placeholderTextColor}
              style={styles.input}
              keyboardType="phone-pad"
              value={celular}
              onChangeText={(t) => setCelular(maskPhoneBR(t))}
              maxLength={15}
              returnKeyType="next"
            />
          </View>

          {/* Telefone */}
          <View style={styles.inputRow}>
            <TextInput
              placeholder="Telefone"
              placeholderTextColor={COLORS.placeholderTextColor}
              style={styles.input}
              keyboardType="phone-pad"
              value={telefone}
              onChangeText={(t) => setTelefone(maskPhoneBR(t))}
              maxLength={15}
              returnKeyType="next"
            />
          </View>

          {/* Email */}
          <View style={styles.inputRow}>
            <TextInput
              placeholder="E-mail"
              placeholderTextColor={COLORS.placeholderTextColor}
              style={styles.input}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              returnKeyType="next"
            />
          </View>

          {/* Adicionar Endereço */}
          <TouchableOpacity
            style={styles.addAddrRow}
            onPress={() => setAddrOpen(true)}
            activeOpacity={0.9}
          >
            <PlusCircle size={18} color={COLORS.brand} />
            <Text style={styles.addAddrText}>Adicionar Endereço</Text>
          </TouchableOpacity>

          {/* CPF/CNPJ */}
          <View style={[styles.inputRow, { marginTop: 18 }]}>
            <TextInput
              placeholder="CPF/CNPJ"
              placeholderTextColor={COLORS.placeholderTextColor}
              style={styles.input}
              keyboardType="number-pad"
              value={doc}
              onChangeText={(t) => setDoc(maskCpfCnpj(t))}
              maxLength={18}
              returnKeyType="next"
            />
          </View>

          {/* Observações */}
          <View style={styles.textAreaWrap}>
            <TextInput
              placeholder="Observações"
              placeholderTextColor={COLORS.placeholderTextColor}
              style={styles.textArea}
              value={obs}
              onChangeText={setObs}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
        </ScrollView>

        {/* Footer - Salvar */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.saveButton, !canSave && styles.saveDisabled]}
            onPress={handleSave}
            disabled={!canSave}
            activeOpacity={0.9}
          >
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      {/* Modal Endereço */}
      <Modal transparent animationType="slide" visible={addrOpen}>
        <TouchableOpacity
          style={styles.addrOverlay}
          activeOpacity={1}
          onPress={() => setAddrOpen(false)}
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
                onPress={() => setAddrOpen(false)}
              >
                <Text style={styles.saveButtonText}>Salvar Endereço</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}
