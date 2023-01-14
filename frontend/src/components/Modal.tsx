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
    position: "fixed", // it stay there, ignore the scrolling
    top: 0,
    left: 0,
    zIndex: 2,
    width: "100vw",
    height: "100vh",
    backdropFilter: "brightness(0.6) blur(2px)",
  };

  const innerStyle: CSSProperties = {
    width: "50%",
    height: "50vh",
    border: `1px solid ${accentColor}`,
    borderRadius: "10px",
    backgroundColor: `${primaryColor}`,
  };

  return (
    <div
      onClick={() => setIsOpen(false)}
      style={outerStyle}
      className="container center-items"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="container center-items"
        style={innerStyle}
      >
        {children}
      </div>
    </div>
  );
};
