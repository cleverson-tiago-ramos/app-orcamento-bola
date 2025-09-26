// /src/presentation/screens/pedidos/usePedidos.ts
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Orcamento } from "@/core/domain/entities/Orcamento";

// 👇 CRIE UMA LISTA DE DADOS FALSOS
const mockPedidos: Orcamento[] = [
  {
    id: 1,
    clienteNome: "Construtora Alfa Ltda",
    status: "aprovado",
    valorTotal: 12500.0,
    dataCriacao: new Date(),
  },
  {
    id: 2,
    clienteNome: "João da Silva - Reforma",
    status: "aberto",
    valorTotal: 7800.5,
    dataCriacao: new Date(),
  },
  {
    id: 3,
    clienteNome: "Condomínio Residencial Sol",
    status: "concluido",
    valorTotal: 25400.0,
    dataCriacao: new Date(),
  },
  {
    id: 4,
    clienteNome: "Maria Oliveira - Decoração",
    status: "cancelado",
    valorTotal: 3200.0,
    dataCriacao: new Date(),
  },
];

export function usePedidos() {
  const [activeTab, setActiveTab] = useState("Últimos");

  const [pedidos, setPedidos] = useState<Orcamento[]>(mockPedidos);

  // Apenas uma declaração da variável 'loading'
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleTabPress = (tab: string) => {
    console.log(`Buscando dados para a aba: ${tab}`);
    setActiveTab(tab);
    // Aqui você chamaria a função para buscar os dados filtrados
  };

  const handleFabPress = () => {
    // Lógica de navegação que implementamos no passo anterior
    navigation.navigate("NovoPedido" as never);
  };

  // O hook retorna tudo que a UI precisa para funcionar
  return {
    activeTab,
    pedidos,
    loading,
    handleTabPress,
    handleFabPress,
  };
}
