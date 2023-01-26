import {
  MdOutlinePersonAddAlt,
  MdMessage,
  MdOutlineError,
  MdOutlinePersonRemove,
  MdOutlinePersonOff,
} from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
// TODO: Add functionality to each of menu
export const PublicCustomerProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <p>customer profile of {userId}</p>
      <br />
      <p onClick={() => {
        navigate(`/chat/${userId}`)
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
