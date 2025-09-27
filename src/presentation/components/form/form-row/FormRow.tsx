import React, { ComponentType, ReactNode } from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import { COLORS } from "@/theme/colors";
import { styles } from "./styles";

type IconProps = { size?: number; color?: string; style?: any };

type Props = {
  /** Passe um componente de ícone (lucide, etc.) */
  Icon?: ComponentType<IconProps>;
  /** OU passe qualquer nó customizado (ex: <MaterialCommunityIcons .../>) */
  Left?: ReactNode;

  inputProps: TextInputProps;
};

export function FormRow({ Icon, Left, inputProps }: Props) {
  return (
    <View style={styles.row}>
      {Left
        ? Left
        : Icon && <Icon size={20} color={COLORS.brand} style={styles.icon} />}
      <TextInput
        placeholderTextColor={COLORS.placeholderTextColor}
        style={styles.input}
        {...inputProps}
      />
    </View>
  );
}
