import { useParams } from "react-router-dom";

export const Cart = () => {
  const { userId } = useParams();
  return (
    <div>cart page of {userId}</div>
  );
}