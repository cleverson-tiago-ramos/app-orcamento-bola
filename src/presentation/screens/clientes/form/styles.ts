import { StyleSheet } from "react-native";
import { COLORS } from "@/theme/colors";

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.backgroundLight },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 12,
  },
  headerTitle: {
    marginLeft: 12,
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.textDark,
  },

  container: { flex: 1, backgroundColor: COLORS.backgroundLight },

  inputRow: {
    flexDirection: "row", // 👈 ícone + input
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.surface,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1, // 👈 ocupa o resto
    fontSize: 16,
    color: COLORS.text,
    paddingVertical: 8,
  },

  addAddrRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: COLORS.surface,
  },
  addAddrText: {
    marginLeft: 8,
    color: COLORS.textDark,
    fontSize: 16,
    fontWeight: "700",
  },

  textAreaWrap: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.backgroundLight,
  },
  textArea: {
    minHeight: 100,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: COLORS.text,
    backgroundColor: COLORS.surface,
  },

  footer: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 14,
    backgroundColor: COLORS.backgroundLight,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  saveButton: {
    backgroundColor: COLORS.brand,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  saveDisabled: { opacity: 0.5 },
  saveButtonText: {
    color: COLORS.backgroundLight,
    fontSize: 16,
    fontWeight: "700",
  },
});
