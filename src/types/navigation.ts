// src/types/navigation.ts
import { NavigatorScreenParams } from "@react-navigation/native";

export type Cliente = {
  id: string;
  nome: string;
  telefone?: string;
};

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
