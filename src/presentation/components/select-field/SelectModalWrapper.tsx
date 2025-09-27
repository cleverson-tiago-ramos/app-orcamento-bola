import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Modal } from "react-native-paper";
import { SelectOption } from "./useSelect";

type Props<T> = {
  visible: boolean;
  onDismiss: () => void;
  options: SelectOption<T>[];
  onSelect: (opt: SelectOption<T>) => void;
  title?: string;
};

export function SelectModalWrapper<T>({
  visible,
  onDismiss,
  options,
  onSelect,
  title = "Selecionar",
}: Props<T>) {
  return (
    <Modal
      visible={visible}
      onDismiss={onDismiss}
      contentContainerStyle={{
        backgroundColor: "#FFF",
        marginHorizontal: 16,
        borderRadius: 16,
        padding: 16,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 12 }}>
        {title}
      </Text>
      <FlatList
        data={options}
        keyExtractor={(i) => String(i.id)}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onSelect(item)}
            style={{
              borderWidth: 1,
              borderColor: "#ECECEC",
              borderRadius: 12,
              paddingVertical: 12,
              paddingHorizontal: 14,
              backgroundColor: "#FFF",
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600", color: "#1C1C1E" }}>
              {item.label}
            </Text>
            {!!item.subtitle && (
              <Text style={{ marginTop: 2, color: "#8A8A8E", fontSize: 12 }}>
                {item.subtitle}
              </Text>
            )}
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        onPress={onDismiss}
        style={{ marginTop: 12, alignSelf: "flex-end" }}
      >
        <Text style={{ color: "#F4781F", fontWeight: "600" }}>Cancelar</Text>
      </TouchableOpacity>
    </Modal>
  );
}
