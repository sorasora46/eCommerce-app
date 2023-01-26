import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MdOutlineEdit, MdEditCalendar, MdEmail } from "react-icons/md";
import { useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import { Navbar } from "../components/navbar/Navbar";
import { PublicCustomerProfile } from "../components/profile/PublicCustomerProfile";
import { UserCartAndTransaction } from "../components/profile/UserCartAndTransaction";
import { AuthContext } from "../context/AuthContext";
import { accentColor, primaryColor } from "../resources/colors";

export const Profile = () => {
  const { userId } = useParams(); // userId from url
  const userContext = useContext(AuthContext); // logged in user
  const [user, setUser] = useState<any>({}); // user from param
  const isLoggedIn = !userContext.error;
  const isSameProfile = isLoggedIn && userContext.userId === userId;

  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userDateOfBirth, setUserDateOfBirth] = useState<string>("");

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [file, setFile] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/user/getuser/${userId}`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
        const role = res.data.role;
        const name = res.data.name;
        const email = res.data.email;
        const dateOfBirth = res.data.dateOfBirth;
        const nameBaseOnRole =
          role === "CUSTOMER"
            ? `${name?.fname} ${name?.lname}`
            : role === "SHOP"
            ? `${name}`
            : "";
        setUserName(nameBaseOnRole);
        setUserEmail(email);
        setUserDateOfBirth(dateOfBirth);

        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // TODO: Create condition rendering on user's role
  // TODO: Editable name, email and profile's picture (by clicking the profile's image)
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "100%",
          backgroundColor: `${accentColor}`,
          gap: "5rem",
          paddingTop: "20vh",
        }}
        className="container flex-column center-items profile-container"
      >
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
              alt={`${userName}'s profile image'`}
              style={{ objectFit: "cover", borderRadius: "50%", cursor: "pointer" }}
              width="100%"
              height="100%"
              onClick={() => {
                if (isSameProfile) {
                  setIsOpen(true);
                }
              }}
            />
          </div>
          <div
            className="container flex-column"
            style={{ color: `${primaryColor}` }}
          >
            <div
              className="container flex-column"
              style={{ textAlign: "center" }}
            >
              <h2
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (isSameProfile) {
                    const name = prompt("Enter new name");
                    console.log(name);
                  }
                  // TODO: Send request to api endpoint with axios
                  // TODO: !important Rebuild backend api endpoint
                }}
              >
                {userName}
                {isSameProfile && (
                  <MdOutlineEdit style={{ marginLeft: "1rem" }} />
                )}
              </h2>
            </div>
            <div
              className="container flex-column"
              style={{ textAlign: "center" }}
            >
              <h2>
                <a
                  href={`mailto:${userEmail}`}
                  style={{ color: `${primaryColor}` }}
                >
                  {userEmail}
                </a>
                <MdEmail style={{ marginLeft: "1rem" }} />
              </h2>
            </div>
            <div
              className="container flex-column"
              style={{ textAlign: "center" }}
            >
              {user?.role === "CUSTOMER" && (
                <h2>
                  Birthdate:&nbsp;&nbsp;
                  {new Date(userDateOfBirth).toDateString()}
                  <MdEditCalendar style={{ marginLeft: "1rem" }} />
                </h2>
              )}
            </div>
          </div>
        </div>

        {/* Private customer profile */}
        {isSameProfile && userContext.role === "CUSTOMER" && (
          <UserCartAndTransaction userId={userContext.userId} />
        )}

        {/* TODO: Create private shop profile */}
        {isSameProfile && userContext.role === "SHOP" && (
          <div>
            <p>shop own profile</p>
          </div>
        )}

        {/* TODO: Create public customer profile */}
        {(!isSameProfile || !isLoggedIn) && user?.role === "CUSTOMER" && (
          <PublicCustomerProfile />
        )}

        {/* TODO: Create public shop profile */}
        {(!isSameProfile || !isLoggedIn) && user?.role === "SHOP" && (
          <div>
            <p>shop someone profile</p>
          </div>
        )}
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="container flex-column">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0])}
          />
          <div className="container flex-row">
            <Button onClick={() => setIsOpen(false)}>Close</Button>
            <Button
              onClick={() => {
                // TODO: Send request to api endpoint
                // TODO: Create endpoint for updating profile image
                setIsOpen(false);
              }}
            >
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
