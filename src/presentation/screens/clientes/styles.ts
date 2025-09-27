// src/presentation/components/date-field/styles.ts
import { StyleSheet } from "react-native";
const ACCENT = "#F4781F";
export const styles = StyleSheet.create({
  header: {
    height: 84,
    paddingHorizontal: 12,
    paddingTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  headerIconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 6,
  },
  headerRight: { flexDirection: "row", alignItems: "center" },
  headerIconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  searchInput: {
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    paddingHorizontal: 12,
    backgroundColor: "#FFFFFF",
  },

  emptyWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  emptyIcon: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: "#EEF2F5",
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#606776",
    marginBottom: 6,
  },
  emptySub: {
    fontSize: 14,
    color: "#9AA0A6",
    marginBottom: 14,
    textAlign: "center",
  },
  addBtn: {
    backgroundColor: ACCENT,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    minWidth: 200,
    alignItems: "center",
  },
  addBtnText: { color: "#FFFFFF", fontWeight: "700" },

  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ECECEC",
    padding: 12,
    marginBottom: 12,
  },
  itemAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF3E9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  itemAvatarText: { color: ACCENT, fontWeight: "800" },
  itemName: { fontSize: 16, fontWeight: "700", color: "#222" },
  itemPhone: { fontSize: 13, color: "#6B7280", marginTop: 2 },
});
