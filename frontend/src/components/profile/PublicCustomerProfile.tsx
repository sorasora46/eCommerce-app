import { useContext } from "react";
import {
  MdOutlinePersonAddAlt,
  MdMessage,
  MdOutlineError,
  MdOutlinePersonRemove,
  MdOutlinePersonOff,
} from "react-icons/md";
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
      <p onClick={() => {
        navigate(`/chat/${userContext.userId}?with=${userId}`)
      }}>
        Chat <MdMessage />
      </p>
      <p>
        Report <MdOutlineError />
      </p>
      <p>
        Block <MdOutlinePersonOff />
      </p>
    </div>
  );
};
