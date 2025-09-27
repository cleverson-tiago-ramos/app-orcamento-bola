// src/presentation/components/date-field/styles.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fieldRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",

    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ECECEC",
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    color: "#8A8A8E",
    marginBottom: 2,
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1C1E",
  },
  iconWrap: {
    marginLeft: 10,
  },
});
