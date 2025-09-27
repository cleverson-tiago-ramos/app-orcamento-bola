import React from "react";
import { ViewStyle, TextStyle } from "react-native";
import { useDatePicker } from "./useDatePicker";
import { DatePickerModalWrapper } from "./DatePickerModalWrapper";
import { DateFieldView } from "./DateFieldView";

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
  const dp = useDatePicker({
    value,
    onChange,
    minDate: minimumDate,
    maxDate: maximumDate,
    locale: locale === "pt" ? "pt-BR" : (locale as string),
  });

  return (
    <>
      <DateFieldView
        label={label}
        valueFormatted={dp.valueFormatted}
        disabled={disabled}
        onPress={dp.openPicker}
        containerStyle={containerStyle}
        labelStyle={labelStyle}
        valueStyle={valueStyle}
      />

      <DatePickerModalWrapper
        visible={dp.open}
        date={dp.value}
        onDismiss={dp.closePicker}
        onConfirm={dp.confirm}
        minDate={dp.minDate}
        maxDate={dp.maxDate}
        locale={locale}
        label={modalLabel}
        okText={okText}
      />
    </>
  );
}
