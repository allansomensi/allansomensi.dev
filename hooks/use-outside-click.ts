import React, { useEffect } from "react";

type HandledEvents = MouseEvent | TouchEvent;

export const useOutsideClick = <T extends HTMLElement | null>(
  ref: React.RefObject<T>,
  callback: (event: HandledEvents) => void,
) => {
  useEffect(() => {
    const listener = (event: HandledEvents) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
