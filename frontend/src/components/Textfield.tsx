import { FC } from "react";

export const Textfield: FC<{
  id?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  type?: string;
  padding?: string;
  margin?: string;
  value: string;
  onChange: Function;
  isRequired?: boolean;
}> = ({ id, placeholder, width, height, type, padding, margin, value, onChange, isRequired }) => {

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
      onChange={(e) => onChange(e.target.value)}
      value={value}
      required={isRequired ? true : false}
    />
  );
};
