import { useParams } from "react-router-dom";

export const Chat = () => {
  const { userId } = useParams();
  return (
    <div>chat page of {userId}</div>
  );
}