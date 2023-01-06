import { FC, useState } from "react";

export const Textfield: FC<{
  id?: string;
  placeholder?: string;
  width?: number;
  height?: number;
}> = ({ id, placeholder, width, height }) => {
  const [text, setText] = useState<string>("");

  const dWidth = width ? width : 317;
  const dHeight = height ? height : 47;

  const style = {
    width: dWidth,
    height: dHeight,
  }

  return (
    <input
      className="textfield center-placeholder"
      style={style}
      type="text"
      id={id}
      placeholder={placeholder}
      onChange={(e) => setText(e.target.value)}
      value={text}
    />
  );
};
