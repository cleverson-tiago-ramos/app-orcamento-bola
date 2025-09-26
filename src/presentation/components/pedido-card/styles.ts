import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  idText: {
    fontSize: 12,
    color: "#888",
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E7D32", // Um verde para o valor
    marginTop: 8,
  },
  statusContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignSelf: "flex-start", // Para o background não ocupar toda a largura
  },
  statusText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  // Estilos para cada status
  statusAberto: {
    backgroundColor: "#1E88E5", // Azul
  },
  statusAprovado: {
    backgroundColor: "#43A047", // Verde
  },
  statusConcluido: {
    backgroundColor: "#546E7A", // Cinza
  },
  statusCancelado: {
    backgroundColor: "#E53935", // Vermelho
  },
  chevron: {
    marginLeft: 10,
  },
});
