import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Search, Filter } from "lucide-react-native";
import { styles } from "./styles";

export function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Search color="#999" size={20} style={styles.icon} />
        <TextInput
          placeholder="Buscar na lista"
          style={styles.input}
          placeholderTextColor="#999"
        />
      </View>
      <TouchableOpacity>
        <Filter color="#333" size={24} />
      </TouchableOpacity>
    </View>
  );
}
