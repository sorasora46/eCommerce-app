import { useParams } from "react-router-dom";

export const Transaction = () => {
  const { userId } = useParams();
  return (
    <div>
      <p>Transaction page of {userId}</p>
    </div>
  );
};
