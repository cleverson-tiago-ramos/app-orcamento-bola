import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { PedidosStackParamList, Cliente } from "@/types/navigation";
import { ChevronLeft, Plus, UserRound } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

const MOCK_CLIENTES: Cliente[] = []; // comece vazio como no print

export function ClientesListScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<PedidosStackParamList>>();
  const [query, setQuery] = useState("");

  const data = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return MOCK_CLIENTES;
    return MOCK_CLIENTES.filter(
      (c) =>
        c.nome.toLowerCase().includes(q) ||
        (c.telefone ?? "").toLowerCase().includes(q)
    );
  }, [query]);

  const handleSelect = (cliente: Cliente) => {
    // atualiza params da tela NewServico e volta
    navigation.navigate("NewServico", { cliente });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      {/* Header com degradê */}
      <LinearGradient
        colors={["#0B7FA6", "#2DA58C"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerIconBtn}
        >
          <ChevronLeft color="#FFFFFF" size={26} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Clientes</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIconCircle}>
            <UserRound color="#2C3E50" size={18} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.headerIconCircle, { marginLeft: 10 }]}
            onPress={() => navigation.navigate("ClienteForm" as never)}
          >
            <Plus color="#2C3E50" size={18} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Busca */}
      <View style={{ paddingHorizontal: 16, marginTop: -18 }}>
        <TextInput
          placeholder="Digite para buscar"
          placeholderTextColor="#9A9A9A"
          value={query}
          onChangeText={setQuery}
          style={styles.searchInput}
        />
      </View>

      {/* Lista / vazio */}
      {data.length === 0 ? (
        <View style={styles.emptyWrap}>
          <View style={styles.emptyIcon} />
          <Text style={styles.emptyTitle}>Cadastro de Clientes</Text>
          <Text style={styles.emptySub}>
            Você ainda não tem clientes cadastrados
          </Text>
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => navigation.navigate("ClienteForm" as never)}
          >
            <Text style={styles.addBtnText}>Adicionar Cliente</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => handleSelect(item)}
            >
              <View style={styles.itemAvatar}>
                <Text style={styles.itemAvatarText}>
                  {item.nome.charAt(0).toUpperCase()}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.itemName}>{item.nome}</Text>
                {!!item.telefone && (
                  <Text style={styles.itemPhone}>{item.telefone}</Text>
                )}
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
