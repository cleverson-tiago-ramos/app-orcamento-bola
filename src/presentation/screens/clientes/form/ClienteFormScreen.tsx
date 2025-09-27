// src/presentation/screens/clientes/form/ClienteFormScreen.tsx
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  UserRound,
  Phone,
  Mail,
  IdCard,
  StickyNote,
  PlusCircle,
  Smartphone,
} from "lucide-react-native";

import { styles } from "./styles";
import { COLORS } from "@/theme/colors";
import { AddressSheet } from "@/presentation/components/form/address-sheet";
import { BrandSwitch } from "@/presentation/components/brand-switch/BrandSwitch";
import { HeaderBack } from "@/presentation/components/header/HeaderBack";
import { FormRow } from "@/presentation/components/form/form-row/FormRow";
import { TextAreaRow } from "@/presentation/components/form/text-area-row/TextAreaRow";
import { SectionTitle } from "@/presentation/components/typography/SectionTitle";
import { useClienteForm } from "./hook/useClienteForm";

export function ClienteFormScreen() {
  const {
    navigation,
    nome,
    setNome,
    celular,
    handleCelularChange,
    whatsapp,
    handleWhatsappChange,
    telefone,
    handleTelefoneChange,
    email,
    setEmail,
    doc,
    applyDoc,
    obs,
    setObs,
    addrOpen,
    setAddrOpen,
    handleCloseAddr,
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
    usarCelularComoWhatsapp,
    toggleUsarCelularComoWhatsapp,
    canSave,
    handleSave,
  } = useClienteForm();

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <HeaderBack title="Novo Cliente" onBack={() => navigation.goBack()} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <SectionTitle>Dados do cliente</SectionTitle>

          <FormRow
            Icon={UserRound}
            inputProps={{
              placeholder: "Nome",
              autoCapitalize: "words",
              returnKeyType: "next",
              value: nome,
              onChangeText: setNome,
            }}
          />

          <SectionTitle>Contato</SectionTitle>

          <FormRow
            Icon={Smartphone}
            inputProps={{
              placeholder: "Celular",
              keyboardType: "phone-pad",
              maxLength: 15,
              returnKeyType: "next",
              value: celular,
              onChangeText: handleCelularChange,
            }}
          />

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

          {!usarCelularComoWhatsapp && (
            <FormRow
              Left={
                <MaterialCommunityIcons
                  name="whatsapp"
                  size={20}
                  color={COLORS.brand}
                  style={{ marginRight: 10 }}
                />
              }
              inputProps={{
                placeholder: "WhatsApp (diferente do celular)",
                keyboardType: "phone-pad",
                maxLength: 15,
                returnKeyType: "next",
                value: whatsapp,
                onChangeText: handleWhatsappChange,
              }}
            />
          )}

          <FormRow
            Icon={Phone}
            inputProps={{
              placeholder: "Telefone Fixo",
              keyboardType: "phone-pad",
              maxLength: 15,
              returnKeyType: "next",
              value: telefone,
              onChangeText: handleTelefoneChange,
            }}
          />

          <FormRow
            Icon={Mail}
            inputProps={{
              placeholder: "E-mail",
              keyboardType: "email-address",
              autoCapitalize: "none",
              returnKeyType: "next",
              value: email,
              onChangeText: setEmail,
            }}
          />

          <TouchableOpacity
            style={styles.addAddrRow}
            onPress={() => setAddrOpen(true)}
            activeOpacity={0.9}
          >
            <PlusCircle size={18} color={COLORS.brand} />
            <Text style={styles.addAddrText}>Adicionar Endereço</Text>
          </TouchableOpacity>

          <SectionTitle>Documentos</SectionTitle>

          <FormRow
            Icon={IdCard}
            inputProps={{
              placeholder: "CPF/CNPJ",
              keyboardType: "number-pad",
              maxLength: 18,
              returnKeyType: "next",
              value: doc,
              onChangeText: applyDoc,
            }}
          />

          <SectionTitle>Observações</SectionTitle>

          <TextAreaRow
            Icon={StickyNote}
            inputProps={{
              placeholder: "Observações",
              value: obs,
              onChangeText: setObs,
              multiline: true,
              numberOfLines: 4,
            }}
          />
        </ScrollView>

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

      <AddressSheet
        visible={addrOpen}
        onClose={handleCloseAddr}
        values={{ cep, rua, numero, bairro, cidade, uf }}
        onChange={{ setCep, setRua, setNumero, setBairro, setCidade, setUf }}
      />
    </SafeAreaView>
  );
}
