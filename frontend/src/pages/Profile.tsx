import { useParams } from "react-router-dom";

export const Profile = () => {
  const { userId } = useParams();
  return (
    <div>profile page of {userId}</div>
  );
} 