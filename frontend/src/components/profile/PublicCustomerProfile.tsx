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
    <div>
      <p>customer profile of {userId}</p>
      <br />
      <ul>
        <li
          onClick={() => {
            navigate(`/chat/${userContext.userId}?with=${userId}`);
          }}
          style={{ cursor: "pointer", width: "autho" }}
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
