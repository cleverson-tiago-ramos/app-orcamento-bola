export type Orcamento = {
  id: number;
  clienteNome: string;
  status: "aberto" | "aprovado" | "concluido" | "cancelado";
  valorTotal: number;
  dataCriacao: Date;
};
