import { useState } from "react";
import { usePopper } from "react-popper";

export const usePopover = () => {
  const [refElement, setRefElement] = useState<any>(null);
  const [popperElement, setPopperElement] = useState<any>(null);
  const { styles, attributes } = usePopper(refElement, popperElement, {
    strategy: "absolute",
    placement: "bottom-start",
    modifiers: [
      {
        name: "flip",
        options: {
          fallbackPlacements: ["top-start"],
        },
      },
      {
        name: "preventOverflow",
        enabled: false,
      },
      {
        name: "offset",
        options: {
          offset: [null, 12],
        },
      },
    ],
  });
  const [isOpen, setIsOpen] = useState(false);

  return {
    setRefElement,
    setPopperElement,
    isOpen,
    setIsOpen,
    styles,
    attributes,
  };
};
