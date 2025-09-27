import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Calendar as CalendarIcon } from "lucide-react-native";
import { styles } from "./styles";

type Props = {
  label: string;
  valueFormatted: string;
  disabled?: boolean;
  onPress: () => void;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  valueStyle?: TextStyle;
};

export function DateFieldView({
  label,
  valueFormatted,
  disabled,
  onPress,
  containerStyle,
  labelStyle,
  valueStyle,
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.fieldRow, containerStyle, disabled && { opacity: 0.6 }]}
      onPress={!disabled ? onPress : undefined}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <View>
        <Text style={[styles.label, labelStyle]}>{label}</Text>
        <Text style={[styles.value, valueStyle]}>{valueFormatted}</Text>
      </View>
      <View style={styles.iconWrap}>
        <CalendarIcon color="#8A8A8E" size={24} />
      </View>
    </TouchableOpacity>
  );
}
