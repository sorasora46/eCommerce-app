import { useContext } from "react";
import { MdMessage, MdOutlineError, MdOutlinePersonOff } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// TODO: Add functionality to each of menu
export const PublicCustomerProfile = () => {
  const { userId } = useParams();
  const userContext = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="container flex-column center-items">
      <ul style={{ display: "flex", gap: "1rem", fontSize: "16px" }}>
        <li
          onClick={() => {
            navigate(`/chat/${userContext.userId}?with=${userId}`);
          }}
          style={{ cursor: "pointer" }}
        >
          Chat <MdMessage />
        </li>
        <li style={{ cursor: "pointer" }}>
          Report <MdOutlineError />
        </li>
        <li style={{ cursor: "pointer" }}>
          Block <MdOutlinePersonOff />
        </li>
      </ul>
      <p></p>
    </div>
  );
};
