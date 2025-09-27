//src/presentation/components/ui/styles.ts
import { StyleSheet, Platform } from "react-native";
import { COLORS } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    backgroundColor: COLORS.backgroundLight,
    justifyContent: "center",
  },
  input: {
    height: 44,
    paddingLeft: 40, // espaço para o ícone
    paddingRight: 40, // espaço para o clear
    fontSize: 16,
    color: "#2D2D2D",
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
