import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export const Navbar = () => {
  const user = useContext(AuthContext);

  return (
    <>
      <div className="navbar-desktop">
        <NavbarDesktop user={user} />
      </div>
      <div className="navbar-mobile">
        <NavbarMobile user={user} />
      </div>
    </>
  );
};
