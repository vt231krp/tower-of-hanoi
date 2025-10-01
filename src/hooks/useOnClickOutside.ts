import { useEffect, useRef } from "react";

type Handler = (event: MouseEvent | TouchEvent) => void;

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
