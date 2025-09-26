import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Menu } from "lucide-react-native";
import { styles } from "./styles"; // <-- MUDANÇA AQUI

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Menu color="#333" size={28} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={{ width: 28 }} />
    </View>
  );
}
