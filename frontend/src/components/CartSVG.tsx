import { FC } from "react";
import { accentColor } from "../resources/colors";

export const CartSVG: FC<{
  width?: number;
  height?: number;
  color?: string;
}> = ({ width, height, color }) => {
  const dWidth = width ? width : 58;
  const dHeight = height ? height : 77;
  const dColor = color ? color : accentColor;

  return (
    <svg
      className="cart-vector cart"
      width={dWidth}
      height={dHeight}
      viewBox={`0 0 ${dWidth} ${dHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29 0C32.8456 0 36.5338 1.52109 39.253 4.22865C41.9723 6.9362 43.5 10.6084 43.5 14.4375H58V19.25V72.1875V77H-1.90735e-06V72.1875V19.25V14.4375H14.5C14.5 10.6084 16.0277 6.9362 18.7469 4.22865C21.4662 1.52109 25.1544 0 29 0ZM29 4.8125C26.4362 4.8125 23.9775 5.82656 22.1646 7.6316C20.3518 9.43663 19.3333 11.8848 19.3333 14.4375H38.6667C38.6667 11.8848 37.6482 9.43663 35.8354 7.6316C34.0225 5.82656 31.5638 4.8125 29 4.8125ZM53.1667 19.25H43.5V24.4855C44.9119 24.9825 46.1345 25.9026 47 27.1195C47.8655 28.3363 48.3312 29.7902 48.3333 31.2812C48.3333 33.1958 47.5695 35.0319 46.2099 36.3857C44.8502 37.7395 43.0062 38.5 41.0833 38.5C39.1605 38.5 37.3164 37.7395 35.9568 36.3857C34.5972 35.0319 33.8333 33.1958 33.8333 31.2812C33.8354 29.7902 34.3012 28.3363 35.1667 27.1195C36.0321 25.9026 37.2548 24.9825 38.6667 24.4855V19.25H19.3333V24.4855C20.7452 24.9825 21.9679 25.9026 22.8333 27.1195C23.6988 28.3363 24.1646 29.7902 24.1667 31.2812C24.1667 33.1958 23.4028 35.0319 22.0432 36.3857C20.6836 37.7395 18.8395 38.5 16.9167 38.5C14.9938 38.5 13.1498 37.7395 11.7901 36.3857C10.4305 35.0319 9.66667 33.1958 9.66667 31.2812C9.66877 29.7902 10.1345 28.3363 11 27.1195C11.8655 25.9026 13.0881 24.9825 14.5 24.4855V19.25H4.83333V72.1875H53.1667V19.25ZM41.0833 28.875C40.4424 28.875 39.8277 29.1285 39.3745 29.5798C38.9213 30.031 38.6667 30.6431 38.6667 31.2812C38.6667 31.9194 38.9213 32.5315 39.3745 32.9827C39.8277 33.434 40.4424 33.6875 41.0833 33.6875C41.7243 33.6875 42.339 33.434 42.7922 32.9827C43.2454 32.5315 43.5 31.9194 43.5 31.2812C43.5 30.6431 43.2454 30.031 42.7922 29.5798C42.339 29.1285 41.7243 28.875 41.0833 28.875ZM16.9167 28.875C16.2757 28.875 15.661 29.1285 15.2078 29.5798C14.7546 30.031 14.5 30.6431 14.5 31.2812C14.5 31.9194 14.7546 32.5315 15.2078 32.9827C15.661 33.434 16.2757 33.6875 16.9167 33.6875C17.5576 33.6875 18.1723 33.434 18.6255 32.9827C19.0787 32.5315 19.3333 31.9194 19.3333 31.2812C19.3333 30.6431 19.0787 30.031 18.6255 29.5798C18.1723 29.1285 17.5576 28.875 16.9167 28.875Z"
        fill={dColor}
      />
    </svg>
  );
};
