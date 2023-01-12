import { FC, MouseEventHandler } from "react";
import { accentColor } from "../../../resources/colors";

export const CloseHamburgerIcon: FC<{ onClick?: MouseEventHandler }> = ({
  onClick,
}) => {
  return (
    <svg
      onClick={onClick}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.7072 1.7071C22.0976 1.31658 22.0976 0.683425 21.7072 0.292905C21.3166 -0.097635 20.6834 -0.097635 20.2928 0.292905L11 9.58578L1.7071 0.292905C1.31658 -0.097635 0.683425 -0.097635 0.292905 0.292905C-0.097635 0.683425 -0.097635 1.31658 0.292905 1.7071L9.58578 11L0.292905 20.2928C-0.097635 20.6834 -0.097635 21.3166 0.292905 21.7072C0.683425 22.0976 1.31658 22.0976 1.7071 21.7072L11 12.4142L20.2928 21.7072C20.6834 22.0976 21.3166 22.0976 21.7072 21.7072C22.0976 21.3166 22.0976 20.6834 21.7072 20.2928L12.4142 11L21.7072 1.7071Z"
        fill={`${accentColor}`}
      />
    </svg>
  );
};
