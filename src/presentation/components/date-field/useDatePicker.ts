import { useMemo, useState } from "react";

export type UseDatePickerParams = {
  value: Date;
  onChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  locale?: string;
};

export function useDatePicker({
  value,
  onChange,
  minDate,
  maxDate,
  locale = "pt-BR",
}: UseDatePickerParams) {
  const [open, setOpen] = useState(false);

  const valueFormatted = useMemo(() => {
    try {
      return new Intl.DateTimeFormat(locale).format(value);
    } catch {
      const d = value;
      const dd = String(d.getDate()).padStart(2, "0");
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const yy = d.getFullYear();
      return `${dd}/${mm}/${yy}`;
    }
  }, [value, locale]);

  const openPicker = () => setOpen(true);
  const closePicker = () => setOpen(false);

  const confirm = (date?: Date) => {
    if (date) onChange(date);
    closePicker();
  };

  return {
    open,
    openPicker,
    closePicker,
    confirm,
    value,
    valueFormatted,
    minDate,
    maxDate,
    locale,
  };
}
