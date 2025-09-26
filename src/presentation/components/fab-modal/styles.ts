import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Fundo escuro semi-transparente
    justifyContent: "flex-end", // Alinha o modal na parte inferior
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1C1C1E",
    marginBottom: 15,
    marginTop: 20,
  },
  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap", // Permite que os itens quebrem a linha
    justifyContent: "flex-start",
    gap: 15, // Espaçamento entre os botões
    marginBottom: 20,
  },
  cardButton: {
    width: "45%", // Quase metade da largura para 2 colunas
    backgroundColor: "#F7F8FA",
    borderRadius: 12,
    padding: 20,
    alignItems: "flex-start", // Alinha conteúdo à esquerda
    justifyContent: "space-between",
    minHeight: 100, // Altura mínima para os cards
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  cardButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1C1E",
    marginTop: 10,
  },
  cardButtonSubText: {
    fontSize: 12,
    color: "#8A8A8E",
  },
  gridRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // Distribui os itens
    marginBottom: 20,
  },
  gridItem: {
    width: "30%", // Para ter 3 colunas
    alignItems: "center",
    marginBottom: 15,
  },
  gridItemText: {
    fontSize: 13,
    color: "#1C1C1E",
    marginTop: 8,
    textAlign: "center",
  },
});
