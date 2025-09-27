import { StyleSheet } from "react-native";
import { COLORS } from "@/theme/colors";

export const styles = StyleSheet.create({
  addrOverlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: "flex-end",
  },
  addrSheet: {
    backgroundColor: COLORS.surface,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: "80%",
  },
  addrHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  addrTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
    color: COLORS.text,
  },
  addrRow: {
    marginBottom: 15,
  },
  addrInput: {
    backgroundColor: COLORS.surface,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: COLORS.text,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  // Container CEP
  cepContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 15,
  },
  cepContainerError: {
    borderColor: COLORS.error,
  },
  cepContainerSuccess: {
    borderColor: COLORS.success,
  },
  cepInput: {
    flex: 1,
    backgroundColor: "transparent",
    borderWidth: 0,
    paddingHorizontal: 0,
    marginRight: 10,
  },

  // Container de mensagens
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 5,
  },

  // Estados de validação
  erroText: {
    color: COLORS.error,
    fontSize: 12,
    marginLeft: 5,
  },
  sucessoText: {
    color: COLORS.success,
    fontSize: 12,
    marginLeft: 5,
  },
  infoText: {
    color: COLORS.muted,
    fontSize: 12,
    marginLeft: 5,
  },

  saveButton: {
    backgroundColor: COLORS.brand,
    height: 48,
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonText: {
    color: COLORS.backgroundLight,
    fontSize: 16,
    fontWeight: "600",
  },
});
