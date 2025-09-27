import React from "react";
import {
  DatePickerModal,
  registerTranslation,
  pt,
} from "react-native-paper-dates";

const ptCustom = {
  ...pt,
  save: "OK",
  cancel: "Cancelar",
  close: "Cancelar",
  label: "Selecione a data",
};
registerTranslation("pt", ptCustom);

type Props = {
  visible: boolean;
  date: Date;
  onDismiss: () => void;
  onConfirm: (date?: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  locale?: string;
  label?: string;
  okText?: string;
};

export function DatePickerModalWrapper({
  visible,
  date,
  onDismiss,
  onConfirm,
  minDate,
  maxDate,
  locale = "pt",
  label = "Selecione a data",
  okText = "OK",
}: Props) {
  return (
    <DatePickerModal
      locale={locale}
      mode="single"
      visible={visible}
      date={date}
      onDismiss={onDismiss}
      onConfirm={(params) => onConfirm(params.date ?? undefined)}
      validRange={{ startDate: minDate, endDate: maxDate }}
      label={label}
      saveLabel={okText}
      presentationStyle="overFullScreen"
      animationType="fade"
      uppercase={false}
    />
  );
}
