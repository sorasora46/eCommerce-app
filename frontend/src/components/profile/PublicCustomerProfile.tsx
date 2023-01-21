import {
  MdOutlinePersonAddAlt,
  MdMessage,
  MdOutlineError,
  MdOutlinePersonRemove,
  MdOutlinePersonOff,
} from "react-icons/md";
// TODO: Add functionality to each of menu
export const PublicCustomerProfile = () => {
  return (
    <div>
      <p>customer someone profile</p>
      <br />
      <p>
        Add friend <MdOutlinePersonAddAlt />
      </p>
      <p>
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
