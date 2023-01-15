import { FC } from "react";
import { primaryColor } from "../../resources/colors";

export const UserProfile: FC<{ user: any }> = ({ user }) => {
  return (
    <div
      className="container flex-column"
      style={{
        width: "100%",
        alignItems: "center",
        gap: "3rem",
      }}
    >
      <div
        style={{
          border: `1px solid ${primaryColor}`,
          borderRadius: "100%",
          width: "15rem",
          height: "15rem",
        }}
      >
        <img
          src={`data:image/*;base64, ${user?.profileImage}`}
          alt={`${user?.name}`}
          style={{ objectFit: "cover", borderRadius: "50%" }}
          width="100%"
          height="100%"
        />
      </div>
      <div
        className="container flex-column"
        style={{ color: `${primaryColor}` }}
      >
        <div className="container-flex-colunm">
          {user?.role === "CUSTOMER" ? (
            <h2 style={{ textAlign: "center" }}>
              {user?.name.fname} {user?.name.lname}
            </h2>
          ) : user?.role === "SHOP" ? (
            <h2>Shop's name: {user?.name}</h2>
          ) : (
            ""
          )}
        </div>
        <div className="container-flex-column" style={{ textAlign: "center" }}>
          <h2>Email: {user?.email}</h2>
          <h2>Birthdate: {new Date(user?.dateOfBirth).toDateString()}</h2>
        </div>
      </div>
    </div>
  );
};
