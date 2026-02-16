import { useEffect, useRef } from "react";

type Handler = (event: MouseEvent | TouchEvent) => void;

/**
 * Hook that detects clicks outside of the referenced element.
 *
 * Returns a `ref` to attach to the target element. Calls `handler`
 * when a click or touch occurs outside that element.
 *
 * @param handler - Callback invoked on outside click/touch.
 * @returns A React ref to attach to the container element.
 */
export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  handler: Handler,
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const element = ref.current;

      if (!element || element.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler]);

  return ref;
};
