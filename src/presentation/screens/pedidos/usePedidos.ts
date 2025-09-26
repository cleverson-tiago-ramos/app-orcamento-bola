import { useState } from "react";

// No futuro, podemos importar as entidades do nosso domínio
// import { Pedido } from '@/core/domain/entities/Pedido';

export function usePedidos() {
  const [activeTab, setActiveTab] = useState("Últimos");

  // Futuramente, aqui entrará a busca de dados do SQLite
  const [pedidos, setPedidos] = useState([]); // Começa com uma lista vazia
  const [loading, setLoading] = useState(false);

  const handleTabPress = (tab: string) => {
    console.log(`Buscando dados para a aba: ${tab}`);
    setActiveTab(tab);
    // Aqui você chamaria a função para buscar os dados filtrados
  };

  const handleFabPress = () => {
    console.log("Navegar para a tela de Novo Pedido");
    // Aqui entrará a lógica de navegação
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
