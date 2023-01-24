import { FC } from "react";
import { accentColor, primaryColor } from "../../resources/colors";
import { CartIcon } from "./CartIcon";
import { ChatIcon } from "./ChatIcon";
import { Logo } from "./Logo";
import { LogoutIcon } from "./LogoutIcon";
import { ProfileIcon } from "./ProfileIcon";
import { ProfileImage } from "./ProfileImage";

export const NavbarDesktop: FC<{ user: any }> = ({ user }) => {
  return (
    <div
      className="container"
      style={{
        justifyContent: "space-between",
        padding: "0 5rem 0 5rem",
        borderBottom: `2px solid ${accentColor}`,
        height: "6%",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        backgroundColor: `${primaryColor}`,
        zIndex: 1,
      }}
    >
      {/* ------------------ Logo ------------------ */}
      <Logo />
      {/* ------------------ Logo ------------------ */}

      {/* ------------------ Right Navbar Container ------------------ */}
      <div className="container" style={{ color: `${accentColor}` }}>
        {/* ------------------ Profile Navbar Container ------------------ */}
        {user.profileImage ? (
          <ProfileImage user={user} />
        ) : (
          <ProfileIcon name={user.name} role={user.role} userId={user.userId} />
        )}
        {/* ------------------ Profile Navbar Container ------------------ */}

        {/* ------------------ Menu Navbar Container ------------------ */}
        <div className="container center-items" style={{ gap: "0.85rem" }}>
          <ChatIcon userId={user.userId} />
          <CartIcon userId={user.userId} />
          <LogoutIcon />
        </div>
        {/* ------------------ Menu Navbar Container ------------------ */}
      </div>
      {/* ------------------ Right Navbar Container ------------------ */}
    </div>
  );
};
