import { CSSProperties, FC, ReactNode } from "react";
import { accentColor } from "../resources/colors";

export const Ellipse: FC<{
  children: ReactNode;
  radius?: number;
  color?: string;
  borderSize: number;
  style?: CSSProperties;
}> = ({ children, radius, borderSize, color, style }) => {
  const defaultSetting = {
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const dRadius = radius ? radius : 167;
  const dColor = color ? color : accentColor;

  const configStyle = {
    ...defaultSetting,
    width: dRadius,
    height: dRadius,
    border: `${borderSize}px solid ${dColor}`,
    ...style,
  };

  return (
    <div style={configStyle} className="shadow">
      {children}
    </div>
  );
};
