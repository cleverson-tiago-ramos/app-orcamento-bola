// src/presentation/components/form/address-sheet/styles.ts
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
  saveButton: {
    backgroundColor: COLORS.brand,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonText: {
    color: COLORS.backgroundLight,
    fontSize: 16,
    fontWeight: "700",
  },
});
