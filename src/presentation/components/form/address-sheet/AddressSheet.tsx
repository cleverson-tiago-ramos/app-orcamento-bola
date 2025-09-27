// src/presentation/components/form/address-sheet/AddressSheet.tsx
import React, { PropsWithChildren, useEffect, useState } from "react";
import {
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { MapPin, Search } from "lucide-react-native";
import { styles } from "./styles";
import { COLORS } from "@/theme/colors";
import { useCEP } from "@/presentation/hooks/useCEP";

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

  const { buscarCEP, carregando, erroCEP, limparErro } = useCEP();
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  // Format CEP enquanto digita
  const handleCepChange = (value: string) => {
    // Remove caracteres não numéricos
    const cepLimpo = value.replace(/\D/g, "");

    // Aplica máscara
    if (cepLimpo.length <= 5) {
      setCep(cepLimpo);
    } else {
      setCep(cepLimpo.replace(/^(\d{5})(\d{0,3})/, "$1-$2"));
    }

    limparErro();
  };

  // Busca automática quando CEP estiver completo
  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length === 8) {
      const newTimeoutId = setTimeout(async () => {
        const endereco = await buscarCEP(cep);

        if (endereco) {
          setRua(endereco.logradouro);
          setBairro(endereco.bairro);
          setCidade(endereco.localidade);
          setUf(endereco.uf);

          // Foca automaticamente no campo número
          // Você pode usar refs para isso se necessário
        }
      }, 800); // Delay de 800ms para evitar muitas requisições

      setTimeoutId(newTimeoutId);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [cep, buscarCEP]);

  // Limpa timeout quando modal fecha
  useEffect(() => {
    if (!visible && timeoutId) {
      clearTimeout(timeoutId);
      limparErro();
    }
  }, [visible]);

  const handleSave = () => {
    onClose();
  };

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
            {/* Campo CEP com busca automática */}
            <View style={styles.addrRow}>
              <View style={styles.cepContainer}>
                <TextInput
                  placeholder="00000-000"
                  placeholderTextColor={COLORS.placeholderTextColor}
                  style={[styles.addrInput, styles.cepInput]}
                  keyboardType="number-pad"
                  value={cep}
                  onChangeText={handleCepChange}
                  maxLength={9}
                />
                {carregando ? (
                  <ActivityIndicator size="small" color={COLORS.brand} />
                ) : (
                  <Search color={COLORS.placeholderTextColor} size={16} />
                )}
              </View>

              {erroCEP && <Text style={styles.erroText}>{erroCEP}</Text>}

              {cep.replace(/\D/g, "").length === 8 &&
                !erroCEP &&
                !carregando && (
                  <Text style={styles.sucessoText}>CEP válido</Text>
                )}
            </View>

            <View style={styles.addrRow}>
              <TextInput
                placeholder="Rua"
                placeholderTextColor={COLORS.placeholderTextColor}
                style={styles.addrInput}
                value={rua}
                onChangeText={setRua}
                editable={!carregando}
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
                editable={!carregando}
              />
              <TextInput
                placeholder="Bairro"
                placeholderTextColor={COLORS.placeholderTextColor}
                style={[styles.addrInput, { flex: 2 }]}
                value={bairro}
                onChangeText={setBairro}
                editable={!carregando}
              />
            </View>

            <View style={[styles.addrRow, { flexDirection: "row", gap: 10 }]}>
              <TextInput
                placeholder="Cidade"
                placeholderTextColor={COLORS.placeholderTextColor}
                style={[styles.addrInput, { flex: 2 }]}
                value={cidade}
                onChangeText={setCidade}
                editable={!carregando}
              />
              <TextInput
                placeholder="UF"
                placeholderTextColor={COLORS.placeholderTextColor}
                style={[styles.addrInput, { flex: 1 }]}
                maxLength={2}
                autoCapitalize="characters"
                value={uf}
                onChangeText={setUf}
                editable={!carregando}
              />
            </View>

            <TouchableOpacity
              style={[styles.saveButton, { marginTop: 10 }]}
              onPress={handleSave}
              disabled={carregando}
            >
              <Text style={styles.saveButtonText}>
                {carregando ? "Buscando..." : "Salvar Endereço"}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
