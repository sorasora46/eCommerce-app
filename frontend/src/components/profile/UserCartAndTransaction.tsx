import { FC } from "react";
import { UserProfileCart } from "./UserProfileCart";
import { UserProfileTransaction } from "./UserProfileTransaction";

export const UserCartAndTransaction: FC<{ userId: string }> = ({ userId }) => {
  return (
    <div
      className="container flex-row center-items profile-detail"
      style={{
        width: "50%",
        justifyContent: "space-between",
      }}
    >
      <UserProfileCart userId={userId} />
      <UserProfileTransaction userId={userId} />
    </div>
  );
};
