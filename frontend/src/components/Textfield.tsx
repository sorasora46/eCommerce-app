import { FC, useState } from "react";

export const Textfield: FC<{
  id?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  type?: string;
  padding?: string;
  margin?: string;
}> = ({ id, placeholder, width, height, type, padding, margin }) => {
  const [text, setText] = useState<string>("");

  const dWidth = width ? width : 317;
  const dHeight = height ? height : 47;
  const dPadding = padding ? padding : "20px";
  const dMargin = margin ? margin : 0;

  const style = {
    width: dWidth,
    height: dHeight,
    padding: dPadding,
    margin: dMargin,
  };

  return (
    <input
      className="textfield center-placeholder"
      style={style}
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={(e) => setText(e.target.value)}
      value={text}
    />
  );
};
