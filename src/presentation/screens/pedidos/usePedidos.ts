import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Orcamento } from "@/core/domain/entities/Orcamento";

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

// 👇 A LINHA MAIS IMPORTANTE É ESTA. PRECISA SER "export function".
export function usePedidos() {
  const [activeTab, setActiveTab] = useState("Últimos");
  const [pedidos, setPedidos] = useState<Orcamento[]>(mockPedidos);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleTabPress = (tab: string) => {
    console.log(`Buscando dados para a aba: ${tab}`);
    setActiveTab(tab);
  };

  const handleFabPress = () => {
    navigation.navigate("NovoPedido" as never);
  };

  return {
    activeTab,
    pedidos,
    loading,
    handleTabPress,
    handleFabPress,
  };
}

// GARANTA QUE NÃO HÁ "export default usePedidos;" AQUI NO FINAL
