import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";
import { ChevronRight } from "lucide-react-native";

type Props = {
  label: string;
  valueText: string;
  onPress: () => void;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  valueStyle?: TextStyle;
};

export function SelectFieldView({
  label,
  valueText,
  onPress,
  disabled,
  containerStyle,
  labelStyle,
  valueStyle,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 14,
          paddingHorizontal: 16,
          backgroundColor: "#FFF",
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#ECECEC",
          marginBottom: 12,
        },
        containerStyle,
        disabled && { opacity: 0.6 },
      ]}
      onPress={!disabled ? onPress : undefined}
      activeOpacity={0.85}
      disabled={disabled}
    >
      <View>
        <Text
          style={[
            { fontSize: 12, color: "#8A8A8E", marginBottom: 2 },
            labelStyle,
          ]}
        >
          {label}
        </Text>
        <Text
          style={[
            { fontSize: 16, fontWeight: "600", color: "#1C1C1E" },
            valueStyle,
          ]}
        >
          {valueText}
        </Text>
      </View>
      <ChevronRight color="#8A8A8E" size={22} />
    </TouchableOpacity>
  );
}
