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
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.surface,
  },
  input: {
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

  // ===== Modal endereço
  addrOverlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: "flex-end",
  },
  addrSheet: {
    backgroundColor: COLORS.surface,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "85%",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 18,
  },
  addrHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  addrTitle: { fontSize: 16, fontWeight: "700", color: COLORS.textDark },
  addrRow: { marginTop: 10 },
  addrInput: {
    height: 44,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: COLORS.surface,
    fontSize: 16,
    color: COLORS.text,
  },
});
