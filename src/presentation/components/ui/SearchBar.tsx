import React, { useEffect, useRef, useState } from "react";
import { ViewStyle, TextInputProps } from "react-native";
import { SearchBarView } from "./SearchBarView";
import { useDebouncedEffect } from "./useDebouncedEffect";
import { COLORS } from "@/theme/colors";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onSubmitEditing?: () => void;
  autoFocus?: boolean;
  /** delay do debounce para onChangeText; 0/undefined = sem debounce */
  debounceMs?: number;
  containerStyle?: ViewStyle;
  inputProps?: Omit<
    TextInputProps,
    "value" | "onChangeText" | "placeholder" | "onSubmitEditing"
  >;
  iconColor?: string;
  clearButton?: boolean;
};

export function SearchBar({
  value,
  onChangeText,
  placeholder,
  onSubmitEditing,
  autoFocus,
  debounceMs,
  containerStyle,
  inputProps,
  iconColor = COLORS.brand,
  clearButton = true,
}: Props) {
  // estado local para digitação imediata
  const [local, setLocal] = useState(value);
  const firstRenderRef = useRef(true);

  // sincroniza quando o valor externo muda (ex.: reset vindo de fora)
  useEffect(() => setLocal(value), [value]);

  // dispara callback com/sem debounce conforme prop
  if (debounceMs && debounceMs > 0) {
    useDebouncedEffect(
      () => {
        // evita disparar já no primeiro render
        if (firstRenderRef.current) {
          firstRenderRef.current = false;
          return;
        }
        onChangeText(local);
      },
      [local],
      debounceMs
    );
  } else {
    useEffect(() => {
      if (firstRenderRef.current) {
        firstRenderRef.current = false;
        return;
      }
      onChangeText(local);
    }, [local]);
  }

  const handleClear = () => {
    setLocal("");
    // garante limpeza imediata mesmo com debounce ativo
    onChangeText("");
  };

  return (
    <SearchBarView
      value={local}
      placeholder={placeholder}
      autoFocus={autoFocus}
      containerStyle={containerStyle}
      inputProps={inputProps}
      iconColor={iconColor}
      showClear={clearButton && local.length > 0}
      onChangeText={setLocal}
      onSubmitEditing={onSubmitEditing}
      onClear={handleClear}
    />
  );
}
