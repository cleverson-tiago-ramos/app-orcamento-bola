import { useEffect } from "react";

/**
 * Executa um efeito com debounce.
 * Útil para onChangeText, buscas, etc.
 */
export function useDebouncedEffect(
  effect: () => void,
  deps: any[],
  delay = 300
) {
  useEffect(() => {
    const handler = setTimeout(effect, delay);
    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, delay]);
}
