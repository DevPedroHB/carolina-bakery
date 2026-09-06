import { useCallback, useState } from "react";

export function useBoolean(initialValue: boolean | (() => boolean) = false) {
  const [value, set] = useState(initialValue);

  const toggle = useCallback(() => {
    set((previous) => !previous);
  }, []);

  const on = useCallback(() => {
    set(true);
  }, []);

  const off = useCallback(() => {
    set(false);
  }, []);

  return [
    value,
    {
      set,
      toggle,
      on,
      off,
    },
  ] as const;
}
