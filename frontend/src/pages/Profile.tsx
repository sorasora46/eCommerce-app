import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { PublicCustomerProfile } from "../components/profile/PublicCustomerProfile";
import { UserCartAndTransaction } from "../components/profile/UserCartAndTransaction";
import { UserProfile } from "../components/profile/UserProfile";
import { AuthContext } from "../context/AuthContext";
import { accentColor } from "../resources/colors";

export const Profile = () => {
  const { userId } = useParams(); // userId from url
  const userContext = useContext(AuthContext); // logged in user
  const [user, setUser] = useState<any>({}); // user from param
  const isLoggedIn = !userContext.error;
  const isSameProfile = isLoggedIn && userContext.userId === userId;

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/user/getuser/${userId}`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // TODO: Create condition rendering on user's role
  // TODO: Editable name, email and profile's picture
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: `${accentColor}`,
          gap: "10rem",
        }}
        className="container flex-column center-items"
      >
        <UserProfile user={user} isSameProfile={isSameProfile} />

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
    </div>
  );
};
