import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {
  accentColor,
  primaryColor,
  secondaryColor,
} from "../../resources/colors";

export const LogoutIcon = () => {
  const user = useContext(AuthContext);

  if (user.error) {
    return (
      <div
        className="container center-items logo shadow"
        style={{
          padding: "0.3rem 0.5rem",
          borderRadius: "35px",
          backgroundColor: `${secondaryColor}`,
        }}
      >
        <Link to="/login" style={{ color: `${primaryColor}` }}>
          Login
        </Link>
      </div>
    );
  }

  return (
    <div
      className="container center-items logo shadow"
      style={{ cursor: "pointer" }}
      onClick={() => {
        axios
          .get("http://127.0.0.1:8000/auth/logout", {
            withCredentials: true,
          })
          .then((res) => {
            if (res.data.isLogout) window.location.reload();
          })
          .catch((err) => console.log(err));
      }}
    >
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.79167 10.5418H12.4583V12.4584H4.79167V15.3334L0 11.5001L4.79167 7.66675V10.5418ZM3.83333 17.2501H6.4285C7.53507 18.226 8.89974 18.8619 10.3587 19.0814C11.8178 19.3009 13.3091 19.0948 14.6539 18.4878C15.9986 17.8807 17.1397 16.8985 17.9401 15.6591C18.7405 14.4196 19.1662 12.9755 19.1662 11.5001C19.1662 10.0247 18.7405 8.58056 17.9401 7.34109C17.1397 6.10163 15.9986 5.11944 14.6539 4.51239C13.3091 3.90535 11.8178 3.69922 10.3587 3.91876C8.89974 4.1383 7.53507 4.77418 6.4285 5.75008H3.83333C4.72522 4.55904 5.88257 3.59241 7.21344 2.92697C8.54432 2.26153 10.012 1.91563 11.5 1.91675C16.7929 1.91675 21.0833 6.20721 21.0833 11.5001C21.0833 16.793 16.7929 21.0834 11.5 21.0834C10.012 21.0845 8.54432 20.7386 7.21344 20.0732C5.88257 19.4078 4.72522 18.4411 3.83333 17.2501V17.2501Z"
          fill={`${accentColor}`}
        />
      </svg>
    </div>
  );
};
