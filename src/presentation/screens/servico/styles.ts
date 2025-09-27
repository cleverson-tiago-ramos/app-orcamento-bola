import { StyleSheet } from "react-native";

const primaryColor = "#FF3B30";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA", // Fundo cinza claro
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#1C1C1E",
  },
  formRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  label: {
    fontSize: 16,
    color: "#8A8A8E",
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  valueText: {
    fontSize: 16,
    color: "#1C1C1E",
    marginRight: 8,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  actionButtonText: {
    fontSize: 16,
    color: primaryColor,
    marginLeft: 12,
    fontWeight: "500",
  },
  proBadge: {
    backgroundColor: "#E5E5EA",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 8,
  },
  proBadgeText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#8A8A8E",
  },
  summaryContainer: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 16,
    color: "#8A8A8E",
  },
  summaryValue: {
    fontSize: 16,
    color: "#1C1C1E",
  },
  summaryTotal: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1C1C1E",
  },
  buttonsRow: {
    flexDirection: "row",
    marginTop: 8,
  },
  halfButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F7F8FA",
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "#1C1C1E",
  },
  footer: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  saveButton: {
    backgroundColor: primaryColor,
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
