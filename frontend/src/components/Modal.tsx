import { CSSProperties, FC, ReactNode } from "react";
import { accentColor, primaryColor } from "../resources/colors";

export const Modal: FC<{
  isOpen: boolean;
  setIsOpen: Function;
  onClose?: Function;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
}> = ({ isOpen, setIsOpen, onClose, children, style, className }) => {
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
      style={style}
        onClick={(e) => e.stopPropagation()}
        className={`container center-items product-modal-inner ${className}`}
      >
        {children}
      </div>
    </div>
  );
};
