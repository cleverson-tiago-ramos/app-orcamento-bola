import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40, // Aumenta o espaço superior
    paddingBottom: 15, // Aumenta o espaço inferior
    backgroundColor: "#FFFFFF", // Fundo branco
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0", // Borda inferior bem clara
  },
  title: {
    fontSize: 22, // Ligeiramente maior
    fontWeight: "600", // Um pouco menos "pesado" que bold
    color: "#1C1C1E", // Um preto suave
  },
});
