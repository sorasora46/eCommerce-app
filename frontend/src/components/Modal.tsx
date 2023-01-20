import { CSSProperties, FC, ReactNode } from "react";
import { accentColor, primaryColor } from "../resources/colors";

export const Modal: FC<{
  isOpen: boolean;
  setIsOpen: Function;
  onClose?: Function;
  children?: ReactNode;
}> = ({ isOpen, setIsOpen, onClose, children }) => {
  const outerStyle: CSSProperties = {
    display: `${isOpen ? "flex" : "none"}`,
  };

  return (
    <div
      onClick={() => setIsOpen(false)}
      style={outerStyle}
      className="container center-items product-modal-outer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="container center-items product-modal-inner"
      >
        {children}
      </div>
    </div>
  );
};
