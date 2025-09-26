//src/presentation/screens/pedidos/new/NewPedidoScreen.tsx
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Button } from "react-native-paper";
import { Header } from "@/presentation/components/header/Header";
import { styles } from "./styles";

export function NewPedidoScreen() {
  const [clienteNome, setClienteNome] = useState("");
  const [valorTotal, setValorTotal] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSalvar = () => {
    console.log("Salvando:", { clienteNome, valorTotal, descricao });
    // Lógica para salvar no banco de dados virá aqui
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Header title="Novo Pedido" />
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          label="Nome do Cliente"
          value={clienteNome}
          onChangeText={setClienteNome}
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="Valor Total (R$)"
          value={valorTotal}
          onChangeText={setValorTotal}
          mode="outlined"
          keyboardType="numeric"
          style={styles.input}
        />

        <TextInput
          label="Descrição do Serviço"
          value={descricao}
          onChangeText={setDescricao}
          mode="outlined"
          multiline
          numberOfLines={4}
          style={styles.input}
        />

        <Button
          mode="contained"
          onPress={handleSalvar}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Salvar Pedido
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
