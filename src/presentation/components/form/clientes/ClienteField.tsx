import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ChevronRight } from "lucide-react-native";

type Props = {
  label: string;
  value?: string;
  onPress: () => void;
  styles: any; // reaproveita o styles da screen
};

export function ClienteField({ label, value, onPress, styles }: Props) {
  return (
    <TouchableOpacity style={styles.formRow} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueContainer}>
        <Text style={[styles.valueText, { marginRight: 8 }]}>
          {value ?? ""}
        </Text>
        <ChevronRight color="#8A8A8E" size={24} />
      </View>
    </TouchableOpacity>
  );
}
