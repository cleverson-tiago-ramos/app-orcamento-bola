import { StyleSheet } from "react-native";

const activeColor = "#0A84FF"; // Azul vibrante da imagem
const inactiveColor = "#8A8A8E"; // Cinza para texto inativo

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 16, // Espaço apenas no início
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  // Usaremos ScrollView, então não precisa de um container para as tabs
  tab: {
    paddingVertical: 12,
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: "transparent", // Transparente por padrão
  },
  activeTab: {
    borderBottomColor: activeColor, // Borda azul apenas no item ativo
  },
  tabText: {
    fontSize: 16,
    color: inactiveColor,
  },
  activeTabText: {
    color: activeColor, // Texto azul no item ativo
    fontWeight: "600",
  },
});
