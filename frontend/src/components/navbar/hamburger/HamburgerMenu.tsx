import { CSSProperties, FC } from "react";
import { accentColor, primaryColor } from "../../../resources/colors";
import { CartIcon } from "../CartIcon";
import { ChatIcon } from "../ChatIcon";
import { LogoutIcon } from "../LogoutIcon";
import { CloseHamburgerIcon } from "./CloseHamburgerIcon";

export const HamburderMenu: FC<{
  user: any;
  isOpen: boolean;
  setIsOpen: Function;
}> = ({ user, isOpen, setIsOpen }) => {
  const outerStyle: CSSProperties = {
    display: isOpen ? "block" : "none",
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    width: "100%",
    height: `${window.innerHeight}px`,
    backdropFilter: "brightness(0.6) blur(2px)",
  };

  const innerStyle: CSSProperties = {
    display: isOpen ? "block" : "none",
    width: "50%",
    height: "100vh",
    backgroundColor: `${primaryColor}`,
    position: "fixed",
    right: "0",
    top: "0",
    padding: "1rem 0 0 1rem",
  };

  return (
    <div
      style={outerStyle}
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <div style={innerStyle} onClick={(e) => e.stopPropagation()}>
        <CloseHamburgerIcon onClick={() => setIsOpen(false)} />
        <div
          className="container flex-column"
          style={{ marginTop: "2rem", gap: "1rem", alignItems: "start" }}
        >
          <div className="container center-items">
            <ChatIcon userId={user.userId}>
              <p
                style={{
                  fontWeight: "600",
                  color: `${accentColor}`,
                  marginLeft: "0.5rem",
                }}
              >
                Chat
              </p>
            </ChatIcon>
          </div>
          <div className="container center-items">
            <CartIcon userId={user.userId}>
              <p
                style={{
                  fontWeight: "600",
                  color: `${accentColor}`,
                  marginLeft: "0.5rem",
                }}
              >
                Cart
              </p>
            </CartIcon>
          </div>
          <div className="container center-items">
            <LogoutIcon>
              <p
                style={{
                  fontWeight: "600",
                  color: `${accentColor}`,
                  marginLeft: "0.5rem",
                }}
              >
                Logout
              </p>
            </LogoutIcon>
          </div>
        </div>
      </div>
    </div>
  );
};
