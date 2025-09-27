import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { styles } from "./styles";

type Props = { children: string };

export function SectionTitle({ children }: Props) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}
