import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  ViewStyle,
  TextInputProps,
} from "react-native";
import { Search, X } from "lucide-react-native";
import { styles } from "./styles";
import { COLORS } from "@/theme/colors";

export type SearchBarViewProps = {
  value: string;
  placeholder?: string;
  autoFocus?: boolean;
  containerStyle?: ViewStyle;
  inputProps?: Omit<
    TextInputProps,
    "value" | "onChangeText" | "placeholder" | "onSubmitEditing"
  >;
  iconColor?: string;
  showClear?: boolean;
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
  onClear?: () => void;
};

export function SearchBarView({
  value,
  placeholder = "Buscar",
  autoFocus,
  containerStyle,
  inputProps,
  iconColor = COLORS.brand,
  showClear,
  onChangeText,
  onSubmitEditing,
  onClear,
}: SearchBarViewProps) {
  const isActive = value?.length > 0;
  return (
    <View
      style={[
        styles.container,
        isActive && styles.containerActive,
        containerStyle,
      ]}
    >
      <Search size={20} color={iconColor} style={styles.leftIcon} />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.placeholderTextColor}
        style={styles.input}
        returnKeyType="search"
        onSubmitEditing={onSubmitEditing}
        autoFocus={autoFocus}
        {...inputProps}
      />

      {showClear && (
        <TouchableOpacity
          style={styles.clearBtn}
          onPress={onClear}
          accessibilityLabel="Limpar busca"
        >
          <X size={18} color={iconColor ?? COLORS.brand} />
        </TouchableOpacity>
      )}
    </View>
  );
}
