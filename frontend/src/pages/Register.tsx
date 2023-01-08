import axios from "axios";
import { useState } from "react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Textfield } from "../components/Textfield";

export const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  function handleRegister() {
    axios
      .post("http://127.0.0.1:8000/user/register", {
        email: email,
        password: password,
        role: "CUSTOMER",
        name: {
          fname: "Boss",
          lname: "Kwanja",
        },
        dateOfBirth: "2003-01-06T17:08:37.378+00:00",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }

  function checkPassword() {
    if (password && confirmPassword && password !== confirmPassword) {
      alert("The password doesn't match with each other");
    }
  }

  return (
    <Container
      width={"100%"}
      height={"100vh"}
      className="flex-column center-items"
    >
      <form
        onSubmit={(e) => {
          handleRegister();
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          e.preventDefault();
        }}
        className="container flex-column"
        style={{
          marginBottom: "20rem",
          gap: "20px",
          textAlign: "center",
        }}
      >
        <div
          id="email-input-container"
          className="container flex-column"
          style={{ gap: "10px" }}
        >
          <label htmlFor="email">Email</label>
          <Textfield
            placeholder="Email"
            type="email"
            value={email}
            onChange={setEmail}
            isRequired={true}
          />
        </div>
        <div
          id="password-input-container"
          className="container flex-column"
          style={{ gap: "10px" }}
        >
          <label htmlFor="password">Password</label>
          <Textfield
            placeholder="Password"
            type="password"
            value={password}
            onChange={setPassword}
            isRequired={true}
          />
        </div>
        <div
          id="confirm-password-input-container"
          className="container flex-column"
          style={{ gap: "10px" }}
        >
          <label htmlFor="confirm-password">Confirm Password</label>
          <Textfield
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            isRequired={true}
            onBlur={checkPassword}
          />
        </div>
        <div
          id="login-register-buttons"
          className="container flex-row center-items"
          style={{ gap: "3rem", marginTop: "20px" }}
        >
          <Button type="submit" className="custom-button">
            Register
          </Button>
        </div>
      </form>
    </Container>
  );
};
