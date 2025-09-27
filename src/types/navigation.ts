// src/types/navigation.ts
import { NavigatorScreenParams } from "@react-navigation/native";

export type PedidosStackParamList = {
  PedidosList: undefined;
  NewPedido: undefined;
  NewServico: undefined;

  // registre aqui as telas que você for usar pelo modal:
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
