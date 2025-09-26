import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F8FA", // Cor de fundo do input
    borderRadius: 10, // Bordas mais arredondadas
    paddingHorizontal: 12,
    marginRight: 16,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 44, // Altura padrão para toque
    fontSize: 16,
    color: "#1C1C1E",
  },
});
