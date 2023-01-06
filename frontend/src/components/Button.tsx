import { CSSProperties, FC, MouseEventHandler, ReactNode } from "react";
import { secondaryColor } from "../resources/colors";

export const Button: FC<{
  children: ReactNode;
  style?: CSSProperties;
  color?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundColor?: string;
  fontSize?: string;
  className?: string;
  onClick?: MouseEventHandler;
}> = ({
  children,
  style,
  color,
  width,
  height,
  borderRadius,
  backgroundColor,
  fontSize,
  className,
  onClick,
}) => {
  const dColor = color ? color : "white";
  const dWidth = width ? width : "120px";
  const dHeight = height ? height : "40px";
  const dBorderRadius = borderRadius ? borderRadius : "35px";
  const dBackgroundColor = backgroundColor ? backgroundColor : secondaryColor;
  const dFontSize = fontSize ? fontSize : "16px";

  const configStyle = {
    minWidth: "120px",
    minHeight: "40px",
    backgroundColor: dBackgroundColor,
    borderRadius: dBorderRadius,
    width: dWidth,
    height: dHeight,
    color: dColor,
    fontSize: dFontSize,
    ...style,
  };
  return (
    <button style={configStyle} className={`${className}`} onClick={onClick} >
      {children}
    </button>
  );
};
