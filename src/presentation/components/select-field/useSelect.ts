import { useMemo, useState } from "react";

export type SelectOption<T = any> = {
  id: string | number;
  label: string;
  subtitle?: string;
  payload?: T;
};

export function useSelect<T = any>(
  options: SelectOption<T>[],
  initial?: SelectOption<T>
) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<SelectOption<T> | undefined>(initial);

  const label = useMemo(() => value?.label ?? "Selecionar", [value]);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const choose = (opt: SelectOption<T>) => {
    setValue(opt);
    closeModal();
  };

  return { open, openModal, closeModal, choose, value, label, options };
}
