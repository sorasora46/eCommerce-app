import {
  MdOutlinePersonAddAlt,
  MdMessage,
  MdOutlineError,
  MdOutlinePersonRemove,
  MdOutlinePersonOff,
} from "react-icons/md";
import { useParams } from "react-router-dom";
// TODO: Add functionality to each of menu
export const PublicCustomerProfile = () => {
  const { userId } = useParams();
  return (
    <div>
      <p>customer profile of {userId}</p>
      <br />
      <p>
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
