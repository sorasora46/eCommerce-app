import { FC, FocusEventHandler } from "react";

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
  onBlur?: FocusEventHandler; // onfocusout
  isRequired?: boolean;
}> = ({ id, placeholder, width, height, type, padding, margin, value, onChange, isRequired, onBlur }) => {

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
      className="textfield center-placeholder shadow"
      style={style}
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      required={isRequired ? true : false}
      onBlur={onBlur}
    />
  );
};
