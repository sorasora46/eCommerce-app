import { FC, ReactNode } from "react";
import { accentColor } from "../resources/colors";

export const Ellipse: FC<{
  children: ReactNode;
  radius?: number;
  color?: string;
  borderSize: number;
}> = ({
  children,
  radius,
  borderSize,
  color,
}) => {
  const defaultSetting = {
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const dRadius = radius ? radius : 167;
  const dColor = color ? color : accentColor;
  const dDropShadowX = dropShadowX ? dropShadowX : 0;
  const dDropShadowY = dropShadowY ? dropShadowY : 4;
  const dDropShadowOpacity = dropShadowOpacity ? dropShadowOpacity : 4;

  const style = {
    ...defaultSetting,
    width: dRadius,
    height: dRadius,
    border: `${borderSize}px solid ${dColor}`,
  };

  return (
    <div className="ellipse" style={style}>
      {children}
    </div>
  );
};
