import { useState } from "react";
import { Container } from "../components/Container";

export const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  function handleRegister() {}

  return (
    <Container
      width={"100%"}
      height={"100vh"}
      className="flex-column center-items"
    >
      <form
        onSubmit={handleRegister}
        className="container flex-column"
        style={{ width: "50%", height: "65%" }}
      >
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">password</label>
        <input type="password" id="password" />
        <label htmlFor="confirm-password">confirm password</label>
        <input type="password" id="confirm-password" />
      </form>
    </Container>
  );
};
