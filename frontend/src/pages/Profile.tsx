import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { UserCartAndTransaction } from "../components/profile/UserCartAndTransaction";
import { UserProfile } from "../components/profile/UserProfile";
import { AuthContext } from "../context/AuthContext";
import { accentColor } from "../resources/colors";

export const Profile = () => {
  const { userId } = useParams();
  const userContext = useContext(AuthContext);
  const [user, setUser] = useState<any>({});

  // check if viewing your own profile
  // const customerEndpoint = `customer/getcustomer/${userId}`;
  // const shopEndpoint = `shop/getshop/${userId}`;
  // if (!userContext.error && userContext.userId === userId) {
  // }

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/user/getuser/${userId}`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* TODO: add fetch user profile image in navbar both desktop and mobile and create mobile version of modal in product */}
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
        <UserProfile user={user} />
        <UserCartAndTransaction userId={user.userId} />
      </div>
    </div>
  );
};
