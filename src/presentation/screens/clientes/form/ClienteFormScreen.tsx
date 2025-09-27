//src/presentation/screens/clientes/form/ClienteFormScreen.tsx
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import {
  X,
  UserRound,
  Phone,
  Mail,
  IdCard,
  StickyNote,
  PlusCircle,
  Smartphone,
} from "lucide-react-native";

import { styles } from "./styles";
import { COLORS, SWITCH_COLORS } from "@/theme/colors";
import { AddressSheet } from "@/presentation/components/form/address-sheet";
import { useClienteForm } from "./hook/useClienteForm";
type Props = {
  value: boolean;
  onValueChange: (v: boolean) => void;
};

export function BrandSwitch({ value, onValueChange }: Props) {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  const trackColor = {
    false: isDark ? SWITCH_COLORS.trackOffDark : SWITCH_COLORS.trackOffLight,
    true: isDark ? SWITCH_COLORS.trackOnDark : SWITCH_COLORS.trackOnLight,
  };

  // iOS também respeita thumbColor, mas no Android ele é essencial
  const thumbColor = value
    ? SWITCH_COLORS.thumbOn
    : isDark
    ? SWITCH_COLORS.thumbOffDark
    : SWITCH_COLORS.thumbOffLight;

  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={trackColor}
      thumbColor={thumbColor}
      // iOS precisa dessa cor de fundo quando está OFF
      ios_backgroundColor={trackColor.false}
      // (opcional) melhora animação no Android
      style={Platform.select({
        android: { transform: [{ scaleX: 1.05 }, { scaleY: 1.05 }] },
      })}
    />
  );
}
export function ClienteFormScreen() {
  const {
    navigation,
    nome,
    setNome,
    celular,
    whatsapp,
    telefone,
    email,
    setEmail,
    doc,
    obs,
    setObs,
    addrOpen,
    setAddrOpen,
    cep,
    setCep,
    rua,
    setRua,
    numero,
    setNumero,
    bairro,
    setBairro,
    cidade,
    setCidade,
    uf,
    setUf,
    canSave,
    handleSave,
    handleCloseAddr,
    usarCelularComoWhatsapp,
    toggleUsarCelularComoWhatsapp,
    handleCelularChange,
    handleWhatsappChange,
    handleTelefoneChange, // NOVA função
    applyDoc,
  } = useClienteForm();

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
            <UserRound
              size={20}
              color={COLORS.brand}
              style={styles.inputIcon}
            />
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
            <Smartphone
              size={20}
              color={COLORS.brand}
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="Celular"
              placeholderTextColor={COLORS.placeholderTextColor}
              style={styles.input}
              keyboardType="phone-pad"
              value={celular}
              onChangeText={handleCelularChange}
              maxLength={15}
              returnKeyType="next"
            />
          </View>

          {/* Checkbox WhatsApp */}
          <View style={styles.checkboxRow}>
            <View style={styles.checkboxContainer}>
              <MaterialCommunityIcons
                name="whatsapp"
                size={20}
                color={COLORS.brand}
                style={styles.checkboxIcon}
              />
              <Text style={styles.checkboxLabel}>
                Usar celular como WhatsApp
              </Text>
              <BrandSwitch
                value={usarCelularComoWhatsapp}
                onValueChange={toggleUsarCelularComoWhatsapp}
              />
            </View>
          </View>

          {/* WhatsApp (apenas se checkbox NÃO estiver marcado) */}
          {!usarCelularComoWhatsapp && (
            <View style={styles.inputRow}>
              <MaterialCommunityIcons
                name="whatsapp"
                size={20}
                color={COLORS.brand}
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="WhatsApp (diferente do celular)"
                placeholderTextColor={COLORS.placeholderTextColor}
                style={styles.input}
                keyboardType="phone-pad"
                value={whatsapp}
                onChangeText={handleWhatsappChange}
                maxLength={15}
                returnKeyType="next"
              />
            </View>
          )}

          {/* Telefone Fixo */}
          <View style={styles.inputRow}>
            <Phone size={20} color={COLORS.brand} style={styles.inputIcon} />
            <TextInput
              placeholder="Telefone Fixo"
              placeholderTextColor={COLORS.placeholderTextColor}
              style={styles.input}
              keyboardType="phone-pad"
              value={telefone}
              onChangeText={handleTelefoneChange} // CORREÇÃO: usar a nova função
              maxLength={15}
              returnKeyType="next"
            />
          </View>

          {/* Email */}
          <View style={styles.inputRow}>
            <Mail size={20} color={COLORS.brand} style={styles.inputIcon} />
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

          {/* Botão Adicionar Endereço */}
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
            <IdCard size={20} color={COLORS.brand} style={styles.inputIcon} />
            <TextInput
              placeholder="CPF/CNPJ"
              placeholderTextColor={COLORS.placeholderTextColor}
              style={styles.input}
              keyboardType="number-pad"
              value={doc}
              onChangeText={(t) => applyDoc(t)} // CORREÇÃO: usar a função do hook
              maxLength={18}
              returnKeyType="next"
            />
          </View>

          {/* Observações */}
          <View style={styles.textAreaWrap}>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <StickyNote
                size={20}
                color={COLORS.brand}
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="Observações"
                placeholderTextColor={COLORS.placeholderTextColor}
                style={[styles.textArea, { flex: 1 }]}
                value={obs}
                onChangeText={setObs}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </View>
        </ScrollView>

        {/* Footer com Botão Salvar */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.saveButton, !canSave && styles.saveDisabled]}
            onPress={handleSave}
            disabled={!canSave}
          >
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      {/* Modal Endereço */}
      <AddressSheet
        visible={addrOpen}
        onClose={handleCloseAddr}
        values={{ cep, rua, numero, bairro, cidade, uf }}
        onChange={{ setCep, setRua, setNumero, setBairro, setCidade, setUf }}
      />
    </SafeAreaView>
  );
}
