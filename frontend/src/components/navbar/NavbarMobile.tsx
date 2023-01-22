import { FC } from "react";
import { accentColor, primaryColor } from "../../resources/colors";
import { Hamburger } from "./hamburger/Hamburger";
import { Logo } from "./Logo";

export const NavbarMobile: FC<{ user: any }> = ({ user }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `2px solid ${accentColor}`,
        height: "7vh",
        padding: "0 1rem 0 1rem",
        position: "fixed",
        width: "100%",
        backgroundColor: `${primaryColor}`,
        zIndex: 1,
      }}
    >
      <Logo />
      <Hamburger user={user} />
    </div>
  );
};
