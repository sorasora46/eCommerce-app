import { FC } from "react";
import { MdEditCalendar, MdOutlineEdit } from "react-icons/md";
import { primaryColor } from "../../resources/colors";

export const UserProfile: FC<{ user: any; isSameProfile: boolean }> = ({
  user,
  isSameProfile,
}) => {
  const name =
    user?.role === "CUSTOMER"
      ? `${user.name?.fname} ${user.name?.lname}`
      : user?.role === "SHOP"
      ? `${user?.name}`
      : "";
  // TODO: Changable profile image
  // TODO: Make name and email editable
  // TODO: Make birthday editable

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
          alt={`${name}'s profile image'`}
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
          <h2 style={{ textAlign: "center" }}>
            {name}
            {isSameProfile && <MdOutlineEdit style={{ marginLeft: "1rem" }} />}
          </h2>
        </div>
        <div className="container-flex-column" style={{ textAlign: "center" }}>
          <h2>
            Email: {user?.email}
            {isSameProfile && <MdOutlineEdit style={{ marginLeft: "1rem" }} />}
          </h2>
          {user?.role === "CUSTOMER" && (
            <h2>
              Birthdate: {new Date(user?.dateOfBirth).toDateString()}
              {isSameProfile && (
                <MdEditCalendar style={{ marginLeft: "1rem" }} />
              )}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};
