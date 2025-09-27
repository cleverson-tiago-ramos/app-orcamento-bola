//src/presentation/components/ui/styles.ts
import { StyleSheet, Platform } from "react-native";
import { COLORS } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.backgroundLight,
    justifyContent: "center",
  },
  // ✅ borda e leve glow quando tiver texto
  containerActive: {
    borderColor: COLORS.success,
    shadowColor: COLORS.success,
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 0 },
    elevation: 2,
  },
  input: {
    height: 44,
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 16,
    color: COLORS.text,
    ...Platform.select({ android: { paddingVertical: 0 } }),
  },
  leftIcon: {
    position: "absolute",
    left: 12,
    top: 12,
  },
  clearBtn: {
    position: "absolute",
    right: 10,
    top: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
