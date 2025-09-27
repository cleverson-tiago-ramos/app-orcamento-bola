import React from "react";
import { SelectFieldView } from "./SelectFieldView";
import { SelectModalWrapper } from "./SelectModalWrapper";
import { SelectOption, useSelect } from "./useSelect";

type Props<T> = {
  label?: string;
  options: SelectOption<T>[];
  value?: SelectOption<T>;
  onChange?: (opt: SelectOption<T>) => void;
  disabled?: boolean;
  title?: string;
};

export function SelectField<T>({
  label = "Cliente",
  options,
  value,
  onChange,
  disabled,
  title = "Selecionar cliente",
}: Props<T>) {
  const sel = useSelect<T>(options, value);

  return (
    <>
      <SelectFieldView
        label={label}
        valueText={sel.label}
        onPress={sel.openModal}
        disabled={disabled}
      />
      <SelectModalWrapper
        visible={sel.open}
        onDismiss={sel.closeModal}
        options={sel.options}
        onSelect={(opt) => {
          sel.choose(opt);
          onChange?.(opt);
        }}
        title={title}
      />
    </>
  );
}
