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
import { MapPin, Search, AlertCircle, CheckCircle } from "lucide-react-native";
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
  const [cepValido, setCepValido] = useState(false);

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

    setCepValido(false);
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
          setRua(endereco.logradouro || "");
          setBairro(endereco.bairro || "");
          setCidade(endereco.localidade || "");
          setUf(endereco.uf || "");
          setCepValido(true);
        } else {
          setCepValido(false);
        }
      }, 800); // Delay de 800ms para evitar muitas requisições

      setTimeoutId(newTimeoutId);
    } else {
      setCepValido(false);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [cep, buscarCEP]);

  // Limpa timeout quando modal fecha
  useEffect(() => {
    if (!visible) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      limparErro();
      setCepValido(false);
    }
  }, [visible]);

  const handleSave = () => {
    onClose();
  };

  const cepLimpo = cep.replace(/\D/g, "");

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
              <View
                style={[
                  styles.cepContainer,
                  erroCEP && styles.cepContainerError,
                  cepValido && styles.cepContainerSuccess,
                ]}
              >
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
                ) : cepValido ? (
                  <CheckCircle color={COLORS.success} size={16} />
                ) : erroCEP ? (
                  <AlertCircle color={COLORS.error} size={16} />
                ) : (
                  <Search color={COLORS.placeholderTextColor} size={16} />
                )}
              </View>

              {/* Mensagens de status */}
              {erroCEP && (
                <View style={styles.messageContainer}>
                  <AlertCircle color={COLORS.error} size={14} />
                  <Text style={styles.erroText}>{erroCEP}</Text>
                </View>
              )}

              {cepLimpo.length === 8 &&
                !erroCEP &&
                !carregando &&
                cepValido && (
                  <View style={styles.messageContainer}>
                    <CheckCircle color={COLORS.success} size={14} />
                    <Text style={styles.sucessoText}>
                      CEP encontrado! Campos preenchidos automaticamente.
                    </Text>
                  </View>
                )}

              {cepLimpo.length === 8 &&
                !erroCEP &&
                !carregando &&
                !cepValido && (
                  <View style={styles.messageContainer}>
                    <Text style={styles.infoText}>
                      Digite um CEP válido para buscar o endereço
                    </Text>
                  </View>
                )}
            </View>

            {/* Campos de endereço */}
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
