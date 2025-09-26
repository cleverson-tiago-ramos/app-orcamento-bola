import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Search, Filter } from "lucide-react-native";
import { styles } from "./styles";

export function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Search color="#F4781F" size={20} style={styles.icon} />
        <TextInput
          placeholder="Buscar na lista"
          style={styles.input}
          placeholderTextColor="#4A4A4A"
        />
      </View>
      <TouchableOpacity>
        <Filter color="#F4781F" size={24} />
      </TouchableOpacity>
    </View>
  );
}
