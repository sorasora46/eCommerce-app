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
      <p onClick={() => {
        // TODO: Check if this user is a friend
        // TODO: post a request to server to add this user to friend list
      }}>
        Add friend <MdOutlinePersonAddAlt />
      </p>
      <p onClick={() => {
        // TODO: Check if this user is a friend
        // TODO: post a request to server to remove this user from friend list
      }}>
        Unfriend <MdOutlinePersonRemove />
      </p>
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
