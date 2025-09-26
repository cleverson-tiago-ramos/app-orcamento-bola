import React from "react";
import { TouchableOpacity } from "react-native";
import { Plus } from "lucide-react-native";
import { styles } from "./styles";

interface FabProps {
  onPress: () => void;
}

export function Fab({ onPress }: FabProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Plus color="#FFFFFF" size={32} />
    </TouchableOpacity>
  );
}
