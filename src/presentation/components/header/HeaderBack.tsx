import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { X } from "lucide-react-native";
import { COLORS } from "@/theme/colors";

type Props = {
  title: string;
  onBack: () => void;
};

export function HeaderBack({ title, onBack }: Props) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={onBack}
        style={styles.backBtn}
        hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
      >
        <X color={COLORS.brand} size={28} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 12,
    backgroundColor: "#FFF",
  },
  backBtn: { paddingRight: 8, paddingVertical: 4 },
  title: { marginLeft: 4, fontSize: 20, fontWeight: "700", color: "#31353B" },
});
