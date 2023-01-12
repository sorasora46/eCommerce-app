import { accentColor } from "../../../resources/colors";

export const HamburgerIcon = () => {
  return (
      <svg
        width="25"
        height="22"
        viewBox="0 0 25 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24.2 0H0V2.2H24.2V0Z" fill={`${accentColor}`} />
        <path d="M24.2 9.8999H0V12.0999H24.2V9.8999Z" fill={`${accentColor}`} />
        <path d="M24.2 19.8H0V22H24.2V19.8Z" fill={`${accentColor}`} />
      </svg>
  );
}