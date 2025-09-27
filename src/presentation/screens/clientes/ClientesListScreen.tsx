//src/presentation/screens/clientes/ClientesListScreen.tsx
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
import EmptyStateIllustration from "@/presentation/components/empty/EmptyStateIllustration";
import { SearchBar } from "@/presentation/components/ui/SearchBar";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { PedidosStackParamList, Cliente } from "@/types/navigation";
import { ChevronLeft, Plus, UserRound, Search } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { COLORS } from "@/theme/colors";

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
      <LinearGradient
        colors={[COLORS.brandLight, COLORS.brand]}
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
            <UserRound color="#F4781F" size={18} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.headerIconCircle, { marginLeft: 10 }]}
            onPress={() => navigation.navigate("ClienteForm" as never)}
          >
            <Plus color="#F4781F" size={18} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Busca */}
      <View style={styles.searchWrapper}>
        <SearchBar
          value={query}
          onChangeText={setQuery}
          placeholder="Buscar Clientes"
          debounceMs={200}
          containerStyle={{ marginHorizontal: 16, marginTop: 10 }}
        />
      </View>

      {/* Lista / vazio */}
      {data.length === 0 ? (
        <View style={styles.emptyWrap}>
          <EmptyStateIllustration
            size={90}
            accent="#F4781F"
            style={{ marginBottom: 12 }}
          />
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
