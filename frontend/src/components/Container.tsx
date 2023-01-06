import { CSSProperties, FC, ReactNode } from "react";

export const Container: FC<{
  width?: string;
  height?: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}> = ({ width, height, children, className, style }) => {
  const configStyle = {
    width: width,
    height: height,
    ...style,
  };

  return (
    <div className={`container ${className}`} style={configStyle}>
      {children}
    </div>
  );
};
