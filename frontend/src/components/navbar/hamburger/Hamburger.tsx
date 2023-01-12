import { FC, useState } from "react";
import { HamburgerIcon } from "./HamburderIcon";
import { HamburderMenu } from "./HamburgerMenu";

export const Hamburger: FC<{ user: any }> = ({ user }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className="shadow"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <HamburgerIcon />
      </div>
      <HamburderMenu user={user} setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};
