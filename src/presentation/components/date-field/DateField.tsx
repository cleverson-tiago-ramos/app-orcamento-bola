// src/presentation/components/date-field/DateField.tsx
import React, { useMemo, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Calendar as CalendarIcon } from "lucide-react-native";
import {
  DatePickerModal,
  registerTranslation,
  pt,
} from "react-native-paper-dates";
import { styles } from "./styles";

// Se quiser usar o "Cancelar" padrão do pacote:
registerTranslation("pt", pt);

// OU, se quiser sobrescrever o texto do botão "Cancelar":
// const ptCustom = { ...pt, cancel: "Fechar" }; // <-- troque aqui
// registerTranslation("pt", ptCustom);

export type DateFieldProps = {
  label?: string;
  value: Date;
  onChange: (date: Date) => void;

  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  valueStyle?: TextStyle;

  minimumDate?: Date;
  maximumDate?: Date;

  disabled?: boolean;

  locale?: "pt" | "en" | string;

  modalLabel?: string;
  okText?: string;
  // closeText?: string; // <- removido, pois a lib não usa prop para isso
};

export function DateField({
  label = "Data",
  value,
  onChange,
  containerStyle,
  labelStyle,
  valueStyle,
  minimumDate,
  maximumDate,
  disabled = false,
  locale = "pt",
  modalLabel = "Selecione a data",
  okText = "OK",
}: DateFieldProps) {
  const [open, setOpen] = useState(false);

  const valueFormatted = useMemo(() => {
    try {
      return new Intl.DateTimeFormat("pt-BR").format(value);
    } catch {
      const d = value;
      const dd = String(d.getDate()).padStart(2, "0");
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const yy = d.getFullYear();
      return `${dd}/${mm}/${yy}`;
    }
  }, [value]);

  return (
    <>
      <TouchableOpacity
        style={[styles.fieldRow, containerStyle, disabled && { opacity: 0.6 }]}
        onPress={() => !disabled && setOpen(true)}
        activeOpacity={0.8}
        disabled={disabled}
      >
        <View>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
          <Text style={[styles.value, valueStyle]}>{valueFormatted}</Text>
        </View>

        <View style={styles.iconWrap}>
          <CalendarIcon color="#8A8A8E" size={24} />
        </View>
      </TouchableOpacity>

      <DatePickerModal
        locale={locale}
        mode="single"
        visible={open}
        date={value}
        onDismiss={() => setOpen(false)}
        onConfirm={(params) => {
          if (params.date) onChange(params.date);
          setOpen(false);
        }}
        validRange={{ startDate: minimumDate, endDate: maximumDate }}
        label={modalLabel}
        saveLabel={okText}
        presentationStyle="overFullScreen"
        animationType="fade"
      />
    </>
  );
}
