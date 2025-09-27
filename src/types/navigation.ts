// src/types/navigation.ts
import { NavigatorScreenParams } from "@react-navigation/native";

export interface Cliente {
  id: string;
  nome: string;
  celular?: string;
  whatsapp?: string;
  telefone?: string;
  email?: string;
  documento?: string;
  observacoes?: string;
  endereco?: {
    cep: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
  };
}

export type PedidosStackParamList = {
  PedidosList: undefined;
  NewPedido: undefined;
  // recebe o cliente selecionado opcionalmente
  NewServico: { cliente?: Cliente } | undefined;

  // novas rotas de cliente
  ClientesList: undefined;
  ClienteForm?: { initial?: Partial<Cliente> } | undefined;

  // (se já usa)
  PDVRapida?: undefined;
  NovoVenda?: undefined;
  CadastroReceita?: undefined;
  CadastroDespesa?: undefined;
  CadastroAgenda?: undefined;
  CadastroServico?: undefined;
  CadastroProduto?: undefined;
};

export type RootTabParamList = {
  Dashboard: undefined;
  PedidosStack: NavigatorScreenParams<PedidosStackParamList>;
  Add: undefined;
  Agenda: undefined;
  Financeiro: undefined;
};
