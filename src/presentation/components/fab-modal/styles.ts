import { StyleSheet } from "react-native";

const orangeColor = "#F4781F";
const redColor = "#FF3B30";

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
    paddingVertical: 20,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1C1C1E",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#8A8A8E",
    marginBottom: 12,
    textTransform: "uppercase",
  },
  cardRow: {
    flexDirection: "row",
    marginBottom: 12,
  },
  cardButtonLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F8FA",
    borderRadius: 12,
    padding: 16,
    marginRight: 6,
  },
  cardButtonRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F8FA",
    borderRadius: 12,
    padding: 16,
    marginLeft: 6,
  },
  cardButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1C1E",
    marginLeft: 12,
  },
  cardButtonSubText: {
    fontSize: 13,
    color: "#8A8A8E",
    marginLeft: 12,
  },
  gridRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 10,
  },
  gridItem: {
    width: "20%",
    alignItems: "center",
    marginBottom: 20,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#FFF7F0", // Um laranja bem claro
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  gridItemText: {
    fontSize: 13,
    color: orangeColor,
    fontWeight: "600",
    textAlign: "center",
  },
});
