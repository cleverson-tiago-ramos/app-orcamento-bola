import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "flex-end",
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

  /** === GRID "NOVO" (cards com ícone redondo + texto ao lado) === */
  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  cardButton: {
    width: "48%", // 2 colunas
    flexDirection: "row", // ícone e textos lado a lado
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 14,

    // borda suave:
    borderWidth: 1,
    borderColor: "#ECECEC",

    // sombra leve:
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,

    // espaçamento entre as linhas do grid:
    marginBottom: 14,
  },
  iconBubble: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F4781F",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  textCol: {
    flex: 1,
  },
  cardButtonTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2D2D2D",
    lineHeight: 20,
  },
  cardButtonSubText: {
    fontSize: 13,
    color: "#8A8A8E",
    marginTop: 2,
  },

  /** === GRID "CADASTRO" (mantido) === */
  gridRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  gridItem: {
    width: "30%",
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
