import { FC } from "react";
import { Link } from "react-router-dom";
import { accentColor } from "../../resources/colors";

export const ProfileImage: FC<{ user: any }> = ({ user }) => {
  return (
    <Link
      to={user.userId ? `/profile/${user.userId}` : "/login"}
      className="container center-items shadow"
      style={{ color: `${accentColor}`, marginRight: "1rem" }}
    >
      <div style={{ marginRight: "1rem" }}>
        <img
          src={`data:image/*;base64, ${user.profileImage}`}
          alt={`profile image of ${user.userId}`}
          width="60"
          height="60"
          style={{
            borderRadius: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <p style={{ fontWeight: "600" }}>
        {user.role === "CUSTOMER"
          ? `${user.name.fname} ${user.name.lname}`
          : user.name}
      </p>
    </Link>
  );
};
