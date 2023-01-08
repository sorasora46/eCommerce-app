import { useState } from "react";
import { Container } from "../components/Container";
import { Textfield } from "../components/Textfield";

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
        <Textfield
          placeholder="Email"
          type="email"
          value={email}
          onChange={setEmail}
          isRequired={true}
        />
          <label htmlFor="password">password</label>
        <Textfield
          placeholder="Password"
          type="password"
          value={password}
          onChange={setPassword}
          isRequired={true}
        />
        <label htmlFor="confirm-password">confirm password</label>
        <Textfield
          placeholder="Password"
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          isRequired={true}
        />
      </form>
    </Container>
  );
};
