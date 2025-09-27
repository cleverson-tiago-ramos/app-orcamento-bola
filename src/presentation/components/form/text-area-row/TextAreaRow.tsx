import React, { ComponentType } from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import { COLORS } from "@/theme/colors";
import { styles } from "./styles";

type IconProps = { size?: number; color?: string; style?: any };

type Props = {
  Icon: ComponentType<IconProps>;
  inputProps: TextInputProps; // lembre de passar multiline, numberOfLines, etc.
};

export function TextAreaRow({ Icon, inputProps }: Props) {
  return (
    <View style={styles.wrap}>
      <Icon size={20} color={COLORS.brand} style={styles.icon} />
      <TextInput
        placeholderTextColor={COLORS.placeholderTextColor}
        style={styles.textArea}
        textAlignVertical="top"
        {...inputProps}
      />
    </View>
  );
}
