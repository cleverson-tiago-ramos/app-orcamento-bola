import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1C1C1E",
    marginTop: 24,
  },
  description: {
    fontSize: 16,
    color: "#8A8A8E", // Cinza mais suave
    textAlign: "center",
    marginTop: 8,
    lineHeight: 24, // Melhora a legibilidade
  },
});
